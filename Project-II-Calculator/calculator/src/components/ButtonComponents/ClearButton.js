import React from 'react';
import './Button.css';
import maths from '../Maths'

const ClearButton = () => {
  return (
    <div className="clear-button">
      <p onClick={() => {maths.clear()}}>clear</p>
    </div>
    )
};

export default ClearButton;