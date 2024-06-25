import React from 'react';
import './IntroScreen.css'; 

const IntroScreen = ({ onStart }) => {
  const handleKeyDown = () => {
    onStart();
  };

  return (
    <div className="intro-screen">
      <h1>To-Do List App</h1>
      <p>Press any key to continue...</p>
      <div className="overlay" onKeyDown={handleKeyDown} tabIndex="0"></div>
    </div>
  );
};

export default IntroScreen;