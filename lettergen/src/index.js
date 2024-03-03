import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About'; 

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
    } else if (page === 'about') {
      goToAbout();
    }
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
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <React.StrictMode>
      <div class="container">
        <div class="button-container">
          <button id="button1" class="button1 btn-outline-primary btn-lg">Home</button>
          <button id="button2" class="button2 btn-outline-success btn-lg">FAQ</button>
          <button id="button3" class="button3 btn-outline-danger btn-lg">About</button>
        </div>
      </div>
      <div>
        {showApp ? <App /> : <About />}
      </div>
    </React.StrictMode>
  );
};

root.render(<Main />);
