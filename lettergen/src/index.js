import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import FAQ from './FAQ';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to switch to the App page
  const goToApp = () => {
    setCurrentPage('home');
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
        <button id="button1" className="button1 btn-lg" onClick={goToApp}>
          Home
        </button>
        <button id="button2" className="button2 btn-lg" onClick={goToFAQ}>
          FAQ
        </button>
        <button id="button3" className="button3 btn-lg" onClick={goToAbout}>
          About
        </button>
      </div>
      <div>
        {currentPage === 'home' && <App />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'about' && <About />}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
