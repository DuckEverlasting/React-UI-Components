import React from 'react';
import './Button.css';

function enterOperand(value) {
  return;
}

const OperandButton = (props) => {
  return (
    <div className="operand-button">
      <p onClick={enterOperand(props.button.value)}>{props.button.value}</p>
    </div>
    )
};

export default OperandButton;