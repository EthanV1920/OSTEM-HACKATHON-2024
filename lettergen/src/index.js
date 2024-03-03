// Main.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Importing pages
import App from './App';
import About from './About';
import FAQ from './FAQ';
import Landing from './Landing';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  // Function to switch to the Landing page
  const goToLanding = () => {
    setCurrentPage('landing');
  };

  // Function to switch to the About page
  const goToAbout = () => {
    setCurrentPage('about');
  };

  // Function to switch to the FAQ page
  const goToFAQ = () => {
    setCurrentPage('faq');
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className="button2 btn-lg" onClick={goToFAQ}>
          FAQ
        </button>
        <button className="button1 btn-lg" onClick={goToLanding}>{/*Home button*/}

        </button>
        <button className="button3 btn-lg" onClick={goToAbout}>
          About
        </button>
      </div>
      <div>
        {currentPage === 'landing' && <Landing />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'about' && <About />}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
