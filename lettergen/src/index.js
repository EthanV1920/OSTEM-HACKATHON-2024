import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import FAQ from './FAQ'; // Import the FAQ component

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [showApp, setShowApp] = useState(true);

  // Function to switch to the App page
  const goToApp = () => {
    setShowApp(true);
  };

  // Function to switch to the About page
  const goToAbout = () => {
    setShowApp(false);
  };

  // Event listeners to handle button clicks
  const handleButtonClick = (page) => {
    if (page === 'home') {
      goToApp();
    } else if (page === 'faq') {
      // Update to navigate to the FAQ page
      goToFAQ();
    } else if (page === 'about') {
      goToAbout();
    }
  };

  // Function to switch to the FAQ page
  const goToFAQ = () => {
    setShowApp(false);
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    document.getElementById('button1').addEventListener('click', () => handleButtonClick('home'));
    document.getElementById('button2').addEventListener('click', () => handleButtonClick('faq'));
    document.getElementById('button3').addEventListener('click', () => handleButtonClick('about'));

    // Remove event listeners when the component unmounts
    return () => {
      document.getElementById('button1').removeEventListener('click', () => handleButtonClick('home'));
      document.getElementById('button2').removeEventListener('click', () => handleButtonClick('faq'));
      document.getElementById('button3').removeEventListener('click', () => handleButtonClick('about'));
    };
  }, []);

  return (
    <Router>
      <React.StrictMode>
        <div className="container">
          <div className="button-container">
            <button id="button1" className="button1 btn-lg">Home</button>
            {/* Use Link component for navigation to FAQ page */}
            <Link to="/FAQ">
              <button id="button2" className="button2 btn-lg">FAQ</button>
            </Link>
            <button id="button3" className="button3 btn-lg">About</button>
          </div>
        </div>
        <div>
          {/* Add a Route for the FAQ page */}
          <Route path="/FAQ" component={FAQ} />
          {showApp ? <App /> : <About />}
        </div>
      </React.StrictMode>
    </Router>
  );
};

root.render(<Main />);
