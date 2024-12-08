import React, { useState } from 'react';


 
const Calculator = () => {
  const [input, setInput] = useState(); 

  const handleClick = (value) => {
    if (value === 'C') {
      setInput(''); 
    } else if (value === '=') {
      try {
        setInput(eval(input).toString()); 
      } catch (error) {
        setInput('Error'); 
      }
    } else {
      setInput(input + value); 
    }
  };

  return (
    <>
      <div className='container  mx-auto my-auto'>
      


        <div className='calculator text-center'>
        <h1 className='paragraph'>This is Calculator</h1>
        <div className='d-flex flex-column align-items-center justify-content-center'>

          <input type='text' className='output' value={input} />
        

     
       
          <div className='box'>
            <button className="number" onClick={() => handleClick('7')}>7</button>
            <button className="number" onClick={() => handleClick('8')}>8</button>
            <button className="number" onClick={() => handleClick('9')}>9</button>
            <button className="operator" onClick={() => handleClick('/')}>/</button>
          </div>
          <div className='box'>
            <button className="number" onClick={() => handleClick('6')}>6</button>
            <button className="number" onClick={() => handleClick('5')}>5</button>
            <button className="number" onClick={() => handleClick('4')}>4</button>
            <button className="operator" onClick={() => handleClick('*')}>*</button>
          </div>
          <div className='box'>
            <button className="number" onClick={() => handleClick('1')}>1</button>
            <button className="number" onClick={() => handleClick('2')}>2</button>
            <button className="number" onClick={() => handleClick('3')}>3</button>
            <button className="operator" onClick={() => handleClick('-')}>-</button>
          </div>
          <div className='box'>
            <button className="number" onClick={() => handleClick('0')}>0</button>
            <button className="digit" onClick={() => handleClick('C')}>C</button>
            <button className="digit" onClick={() => handleClick('=')}>=</button>
            <button className="operator" onClick={() => handleClick('+')}>+</button>
          </div>
        </div>
       
        </div>
    
      </div>
    </>
  );
};

export default Calculator;
