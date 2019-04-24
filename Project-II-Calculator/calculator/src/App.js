import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorButtons from './components/ButtonComponents/CalculatorButtons'
import maths from './components/Maths'

const App = () => {
  return (
    <div className="calculator-container">
        <CalculatorDisplay />
        <CalculatorButtons />
        <div className="debug-button" onClick={function(){maths.debug()}}>DEBUG</div>
    </div>
  );
};

export default App;
