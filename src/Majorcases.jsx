import React from 'react';
import './MajorCases.css'; 
import family from "../src/images/family.jpg"
import children from "../src/images/children.jpg"
import divorce from "../src/images/divorce.jpg"

const MajorCases = () => {
  return (
    <div className="major-cases">
      <h2>All Major Cases Types Covered</h2>
      <div className="case-boxes">
        <div className="case-box">
          <img src={family} alt="Family Case" />
          <p>Family</p>
        </div>
        <div className="case-box">
          <img src={children} alt="Children Case" />
          <p>Child</p>
        </div>
        <div className="case-box">
          <img src={divorce} alt="Divorce Case" />
          <p>Divorce</p>
        </div>
      </div>
    </div>
  );
};

export default MajorCases;