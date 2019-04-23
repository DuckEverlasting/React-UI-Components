import React from 'react';
import './Button.css';
import OperatorAssembly from './OperatorAssembly'
import OperandAssembly from './OperandAssembly'
import ClearButton from './ClearButton';

const CalculatorButtons = () => {
  return (
  <div className="calculator-buttons">
    <div className="left-buttons">
      <ClearButton />
      <OperandAssembly />
    </div>
    <OperatorAssembly />
  </div>)
};

export default CalculatorButtons;