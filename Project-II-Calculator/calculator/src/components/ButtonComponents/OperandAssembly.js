import React from 'react';
import './Button.css';
import OperandButton from './OperandButton';
import maths from '../Maths'

const OperandAssembly = () => {
  return (
    <div className="operand-assembly">
      {maths.operands.map(el => {
        return <OperandButton button={el} />
      })}
    </div>
    )
};

export default OperandAssembly;