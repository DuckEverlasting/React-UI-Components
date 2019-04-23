import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorButtons from './components/ButtonComponents/CalculatorButtons'

const App = () => {
  return (
    <div className="calculator-container">
        <CalculatorDisplay />
        <CalculatorButtons />
    </div>
  );
};

export default App;
