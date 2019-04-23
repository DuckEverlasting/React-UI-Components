import React from 'react';
import './Button.css';
import OperandButton from './OperandButton';

const operands = [
  {value: 0},
  {value: 1},
  {value: 2},
  {value: 3},
  {value: 4},
  {value: 5},
  {value: 6},
  {value: 7},
  {value: 8},
  {value: 9},
]

const OperandAssembly = () => {
  return (
    <div className="operand-assembly">
      {operands.map(el => {
        return <OperandButton button={el} />
      })}
    </div>
    )
};

export default OperandAssembly;