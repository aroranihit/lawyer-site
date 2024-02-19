import React, { useState } from 'react';
import './Form.css'; 

const Form = () => {
  
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  
  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
  };

  return (
    <div className="form-container">
      <h2>Lets get Started!</h2>
      <form>
        <div className="form-group">
        
          <select id="option1" value={selectedOption1} onChange={handleOption1Change}>
            <option value="">Income</option>
            <option value="option1Value1">€0 - €100,000</option>
            <option value="option1Value2">€100,000 - €30,0000</option>
            <option value="option1Value3">€30,0000 - €50,0000</option>
            <option value="option1Value3">€50,0000 - €1,000,000</option>
            <option value="option1Value3">€1,000,000+</option>
          
          </select>
        </div>
        <div className="form-group">
       
          <select id="option2" value={selectedOption2} onChange={handleOption2Change}>
            <option value="">Combined Asset Worth</option>
            <option value="option2Value1">€0 - €100,000</option>
            <option value="option2Value2">€100,000 - €30,0000</option>
            <option value="option2Value3">€30,0000 - €50,0000</option>
            <option value="option2Value3">€50,0000 - €1,000,000</option>
            <option value="option2Value3">€1,000,000+</option>
          </select>
        </div>
        <div className="form-group">
        
          <select id="option3" value={selectedOption3} onChange={handleOption3Change}>
            <option value="">Estimated Available Savings</option>
            <option value="option3Value1">€0 - €100,000</option>
            <option value="option3Value2">€100,000 - €30,0000</option>
            <option value="option3Value3">€30,0000 - €50,0000</option>
            <option value="option3Value3">€50,0000 - €1,000,000</option>
            <option value="option3Value3">€1,000,000+</option>
            
          </select>
        </div>

        <div className="form-group">
        
          <select id="option1" value={selectedOption1} onChange={handleOption1Change}>
            <option value="">Real State</option>
            <option value="option4Value1">€0 - €100,000</option>
            <option value="option4Value2">€100,000 - €30,0000</option>
            <option value="option4Value3">€30,0000 - €50,0000</option>
            <option value="option4Value3">€50,0000 - €1,000,000</option>
            <option value="option4Value3">€1,000,000+</option>
          
          </select>
        </div>

        <div className="form-group">
        
        <select id="option1" value={selectedOption1} onChange={handleOption1Change}>
          <option value="">Account Opening Value</option>
          <option value="option1Value1">€0 - €100,000</option>
          <option value="option1Value2">€100,000 - €30,0000</option>
          <option value="option1Value3">€30,0000 - €50,0000</option>
          <option value="option1Value3">€50,0000 - €1,000,000</option>
          <option value="option1Value3">€1,000,000+</option>
        
        </select>
      </div>

        <div className="button-group">
          <button className="green-button" type="submit">Speak to a lawyer</button>
          <button className="black-button" type="reset">Go Back</button>
        </div>
      </form>
    </div>
  );
};

export default Form;