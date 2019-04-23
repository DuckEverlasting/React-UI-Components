import React from 'react';
import './Button.css';

const OperatorButton = (props) => {
  return (
    <div className="operator-button">
      <p onClick={() => {props.button.operation()}}>{props.button.symbol}</p>
    </div>
    )
};

export default OperatorButton;