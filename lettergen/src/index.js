// Main.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import FAQ from './FAQ';
import Landing from './Landing';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'faq') {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  const goToApp = () => {
    setCurrentPage('app');
  };

  const goToAbout = () => {
    setCurrentPage('about');
  };

  const goToFAQ = () => {
    setCurrentPage('faq');
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className="button2 btn-lg" onClick={goToFAQ}>
          FAQ
        </button>

        <button className="button1 btn-lg" onClick={() => setCurrentPage('landing')}>
        </button>

        <button className="button3 btn-lg" onClick={goToAbout}>
          About
        </button>
      </div>
      <div>
        {currentPage === 'landing' && <Landing goToApp={goToApp} />}
        {currentPage === 'app' && <App />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'about' && <About />}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
