import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';
import maths from '../Maths'

const OperatorAssembly = () => {
  return (
    <div className="operator-assembly">
      {maths.operators.map(el => {
        return <OperatorButton button={el} />
      })}
    </div>
    )
};

export default OperatorAssembly;