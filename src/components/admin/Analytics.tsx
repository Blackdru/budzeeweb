import React, { useState, useEffect } from 'react';
import { apiRequest, API_ENDPOINTS } from '../../config/api';

interface AnalyticsData {
  totalPageViews: number;
  uniqueVisitors: number;
  returningVisitors: number;
  totalDownloads: number;
  conversionRate: number;
  topCountries: Array<{ country: string; visitors: number }>;
  deviceBreakdown: Array<{ device: string; count: number }>;
  browserBreakdown: Array<{ browser: string; count: number }>;
}

interface Visitor {
  id: string;
  sessionId: string;
  ipAddress: string;
  country: string;
  city: string;
  device: string;
  browser: string;
  os: string;
  referrer: string;
  landingPage: string;
  pageViews: number;
  appDownloaded: boolean;
  downloadedAt: string | null;
  firstVisit: string;
  lastVisit: string;
  visitDuration: number | null;
  isReturning: boolean;
}

export default function Analytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [timeframe, setTimeframe] = useState('7d');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchAnalytics();
    fetchVisitors();
  }, [timeframe]);

  const fetchAnalytics = async () => {
    try {
      const response = await apiRequest(`${API_ENDPOINTS.analytics}?timeframe=${timeframe}`);
      if (response.success) {
        setAnalytics(response.analytics);
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    }
  };

  const fetchVisitors = async () => {
    try {
      setLoading(true);
      const response = await apiRequest(`${API_ENDPOINTS.visitors}?limit=50`);
      if (response.success) {
        setVisitors(response.visitors);
      }
    } catch (error) {
      console.error('Failed to fetch visitors:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return 'N/A';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  if (loading && !analytics) {
    return (
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">Loading analytics...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Website Analytics</h1>
          
          {/* Timeframe Selector */}
          <div className="flex gap-4 mb-6">
            {['1d', '7d', '30d'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  timeframe === period
                    ? 'bg-primary text-white'
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                {period === '1d' ? 'Last 24h' : period === '7d' ? 'Last 7 days' : 'Last 30 days'}
              </button>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6">
            {['overview', 'visitors'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-secondary text-white'
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && analytics && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Page Views</h3>
                <p className="text-3xl font-bold text-primary">{analytics.totalPageViews}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Unique Visitors</h3>
                <p className="text-3xl font-bold text-secondary">{analytics.uniqueVisitors}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Returning Visitors</h3>
                <p className="text-3xl font-bold text-accent">{analytics.returningVisitors}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">App Downloads</h3>
                <p className="text-3xl font-bold text-green-500">{analytics.totalDownloads}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Conversion Rate</h3>
                <p className="text-3xl font-bold text-orange-500">{analytics.conversionRate}%</p>
              </div>
            </div>

            {/* Charts and Breakdowns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Top Countries */}
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-lg font-semibold mb-4">Top Countries</h3>
                <div className="space-y-3">
                  {analytics.topCountries.map((country, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{country.country || 'Unknown'}</span>
                      <span className="text-sm font-medium">{country.visitors}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Breakdown */}
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-lg font-semibold mb-4">Device Types</h3>
                <div className="space-y-3">
                  {analytics.deviceBreakdown.map((device, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm capitalize">{device.device}</span>
                      <span className="text-sm font-medium">{device.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Browser Breakdown */}
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="text-lg font-semibold mb-4">Browsers</h3>
                <div className="space-y-3">
                  {analytics.browserBreakdown.map((browser, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm capitalize">{browser.browser}</span>
                      <span className="text-sm font-medium">{browser.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visitors' && (
          <div className="bg-card rounded-xl border overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Recent Visitors</h3>
              <p className="text-sm text-muted-foreground">Detailed visitor information and download status</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Location</th>
                    <th className="text-left p-4 font-medium">Device</th>
                    <th className="text-left p-4 font-medium">Browser</th>
                    <th className="text-left p-4 font-medium">Pages</th>
                    <th className="text-left p-4 font-medium">Duration</th>
                    <th className="text-left p-4 font-medium">Downloaded</th>
                    <th className="text-left p-4 font-medium">First Visit</th>
                  </tr>
                </thead>
                <tbody>
                  {visitors.map((visitor) => (
                    <tr key={visitor.id} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="p-4">
                        <div className="text-sm">
                          <div className="font-medium">{visitor.city || 'Unknown'}</div>
                          <div className="text-muted-foreground">{visitor.country || 'Unknown'}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm capitalize">{visitor.device}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm capitalize">{visitor.browser}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{visitor.pageViews}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{formatDuration(visitor.visitDuration)}</span>
                      </td>
                      <td className="p-4">
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          visitor.appDownloaded 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {visitor.appDownloaded ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{formatDate(visitor.firstVisit)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}