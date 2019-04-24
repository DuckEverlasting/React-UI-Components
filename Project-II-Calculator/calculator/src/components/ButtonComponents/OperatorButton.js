import React from 'react';
import './Button.css';
import maths from '../Maths'

const OperatorButton = (props) => {
  return (
    <div className="operator-button" onClick={function() {maths.enterOperator(props.button.symbol)}}>
      <p>{props.button.symbol}</p>
    </div>
    )
};

export default OperatorButton;