// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
  // Website specific endpoints
  contact: `${API_BASE_URL}/api/website/contact`,
  feedback: `${API_BASE_URL}/api/feedback/submit`, // Unified feedback endpoint
  downloadTrack: `${API_BASE_URL}/api/website/download-track`,
  stats: `${API_BASE_URL}/api/website/stats`,
  appInfo: `${API_BASE_URL}/api/website/app-info`,
  newsletter: `${API_BASE_URL}/api/website/newsletter`,
  
  // Game API endpoints (for future use)
  auth: `${API_BASE_URL}/api/auth`,
  game: `${API_BASE_URL}/api/game`,
  wallet: `${API_BASE_URL}/api/wallet`,
  profile: `${API_BASE_URL}/api/profile`,
};

export const apiRequest = async (url: string, options: RequestInit = {}) => {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export default API_ENDPOINTS;