import React from 'react';
import './Landing.css';

const Landing = ({ goToApp }) => {
  return (
    <div className="landing-container">
    <div className="space"></div>
      <p className="left-text">Voter</p>
      <p className="right-text">Advocate</p>
      <div className="space"></div>
      
      <p className="exerpt"> Our platform is designed to assist you in determining whether your voting rights have been compromised, ensuring you can exercise your right to vote with comfort and safety.</p>
      <button className="mainPage btn-lg" onClick={goToApp}>
        Check Your Case
      </button>
      <img src="1.jpg" className="pic"></img>
    </div>
  );
};

export default Landing;
