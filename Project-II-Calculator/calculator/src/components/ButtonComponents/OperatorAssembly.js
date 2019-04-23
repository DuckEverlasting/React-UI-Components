import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';

const operators = [
  {symbol: "÷", operation(){}},
  {symbol: "×", operation(){}},
  {symbol: "-", operation(){}},
  {symbol: "+", operation(){}},
  {symbol: "=", operation(){}},
]

const OperatorAssembly = () => {
  return (
    <div className="operator-assembly">
      {operators.map(el => {
        return <OperatorButton button={el} />
      })}
    </div>
    )
};

export default OperatorAssembly;