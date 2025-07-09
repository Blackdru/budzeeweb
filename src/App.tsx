import './App.css';
import Landing from './components/landing/Landing';
import TC from './components/terms/TC';
import Policy from './components/policy/Policy';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ContactPage from './components/contact/ContactPage';
import FeedbackPage from './components/feedback/FeedbackPage';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route  path='/'  Component={Landing}></Route>
          <Route  path='/terms'  Component={TC}></Route>
          <Route  path='/privacy'  Component={Policy}></Route>
          <Route  path='/contact'  Component={ContactPage}></Route>
          <Route path='/feedback' Component={FeedbackPage}></Route>
        </Routes>
       </Router>
    </HelmetProvider>
  );
}

export default App;