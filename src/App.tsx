import React from 'react';
import './App.css';
import Landing from './components/landing/Landing';
import TC from './components/terms/TC';
import Policy from './components/policy/Policy';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ContactPage from './components/contact/ContactPage';
import FeedbackPage from './components/feedback/FeedbackPage';
import Analytics from './components/admin/Analytics';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  // Initialize tracking service
  React.useEffect(() => {
    // Tracking service is automatically initialized on import
    console.log('App loaded with tracking');
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route  path='/'  Component={Landing}></Route>
          <Route  path='/terms'  Component={TC}></Route>
          <Route  path='/privacy'  Component={Policy}></Route>
          <Route  path='/contact'  Component={ContactPage}></Route>
          <Route path='/feedback' Component={FeedbackPage}></Route>
          <Route path='/admin/analytics' Component={Analytics}></Route>
        </Routes>
       </Router>
    </HelmetProvider>
  );
}

export default App;