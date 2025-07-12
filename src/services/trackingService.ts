import { apiRequest, API_ENDPOINTS } from '../config/api';

class TrackingService {
  private sessionId: string;
  private startTime: number;
  private isTracking: boolean = false;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async initializeTracking() {
    if (this.isTracking) return;
    this.isTracking = true;

    try {
      // Get location info (optional)
      let locationData = {};
      try {
        const locationResponse = await fetch('https://ipapi.co/json/');
        if (locationResponse.ok) {
          const location = await locationResponse.json();
          locationData = {
            country: location.country_name,
            city: location.city
          };
        }
      } catch (error) {
        console.log('Location detection failed:', error);
      }

      // Track initial visit
      await apiRequest(API_ENDPOINTS.trackVisitor, {
        method: 'POST',
        body: JSON.stringify({
          sessionId: this.sessionId,
          referrer: document.referrer || null,
          landingPage: window.location.pathname,
          ...locationData
        })
      });

      // Set up page visibility tracking
      this.setupVisibilityTracking();
      
      // Set up beforeunload tracking
      this.setupBeforeUnloadTracking();

      console.log('Visitor tracking initialized:', this.sessionId);
    } catch (error) {
      console.error('Failed to initialize tracking:', error);
    }
  }

  private setupVisibilityTracking() {
    let isVisible = !document.hidden;
    let visibilityStart = Date.now();

    const handleVisibilityChange = () => {
      if (document.hidden && isVisible) {
        // Page became hidden
        isVisible = false;
        this.updateVisitDuration();
      } else if (!document.hidden && !isVisible) {
        // Page became visible
        isVisible = true;
        visibilityStart = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  private setupBeforeUnloadTracking() {
    window.addEventListener('beforeunload', () => {
      this.updateVisitDuration();
    });
  }

  private async updateVisitDuration() {
    try {
      const duration = Math.floor((Date.now() - this.startTime) / 1000);
      
      // Use sendBeacon for reliable tracking on page unload
      const data = JSON.stringify({
        sessionId: this.sessionId,
        duration
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          API_ENDPOINTS.updateDuration,
          new Blob([data], { type: 'application/json' })
        );
      } else {
        // Fallback for browsers without sendBeacon
        await apiRequest(API_ENDPOINTS.updateDuration, {
          method: 'POST',
          body: data
        });
      }
    } catch (error) {
      console.error('Failed to update visit duration:', error);
    }
  }

  async trackDownload(source: string = 'website') {
    try {
      await apiRequest(API_ENDPOINTS.downloadTrack, {
        method: 'POST',
        body: JSON.stringify({
          sessionId: this.sessionId,
          source
        })
      });
      console.log('Download tracked successfully');
    } catch (error) {
      console.error('Failed to track download:', error);
    }
  }

  async trackPageView(page: string) {
    try {
      await apiRequest(API_ENDPOINTS.trackVisitor, {
        method: 'POST',
        body: JSON.stringify({
          sessionId: this.sessionId,
          landingPage: page
        })
      });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  getSessionId(): string {
    return this.sessionId;
  }
}

// Create singleton instance
const trackingService = new TrackingService();

export default trackingService;