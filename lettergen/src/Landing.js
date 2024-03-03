// Landing.js
import React from 'react';

const Landing = ({ goToApp }) => {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <button className="mainPage btn-lg" onClick={goToApp}>
        Check Your Case
      </button>
    </div>
  );
};

export default Landing;
