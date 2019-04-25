import React from 'react';
import './Button.css';
import maths from '../Maths'

const OperandButton = (props) => {
  return (
    <div className="operand-button" onClick={function(){maths.enterOperand(props.button.value)}}>
      <p>{props.button.value}</p>
    </div>
    )
};

export default OperandButton;