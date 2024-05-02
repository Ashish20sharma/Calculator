import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const handlebutton = (value) => {
    if (value === 'c') {
      setInput('');
    } else if (value === 'X') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input));
      }
      catch (error) {
        setInput('invalid')
      }
    }
    else {
      setInput((preValue) => preValue + value);
    }
  }
  return (
    <div className="calculator">
      <div className='calc.'>
        <h2 id='input'>{input}</h2>
        <div className='buttons'>
          <button onClick={() => handlebutton('c')}>C</button>
          <button onClick={() => handlebutton('X')}>X</button>
          <button onClick={() => handlebutton('%')}>%</button>
          <button onClick={() => handlebutton('/')}>/</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handlebutton('7')}>7</button>
          <button onClick={() => handlebutton('8')}>8</button>
          <button onClick={() => handlebutton('9')}>9</button>
          <button onClick={() => handlebutton('*')}>*</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handlebutton('4')}>4</button>
          <button onClick={() => handlebutton('5')}>5</button>
          <button onClick={() => handlebutton('6')}>6</button>
          <button onClick={() => handlebutton('-')}>-</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handlebutton('1')}>1</button>
          <button onClick={() => handlebutton('2')}>2</button>
          <button onClick={() => handlebutton('3')}>3</button>
          <button onClick={() => handlebutton('+')}>+</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handlebutton('0')}>0</button>
          <button onClick={() => handlebutton('00')}>00</button>
          <button onClick={() => handlebutton('.')}>.</button>
          <button onClick={() => handlebutton('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
