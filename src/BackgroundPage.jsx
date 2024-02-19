import React from 'react';
import './BackgroundPage.css'; 
import image from "../src/images/law.jpg"

const BackgroundPage = () => {
  return (
    <div className="background-container">
        
      <img src={image} alt="Background" className="background-image" />
      
      
    </div>
  );
};

export default BackgroundPage;