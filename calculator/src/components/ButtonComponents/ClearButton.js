import React from 'react';
import './Button.css';
import maths from '../Maths'

const ClearButton = () => {
  return (
    <div className="clear-button" onClick={() => {maths.clear()}}>
      <p>clear</p>
    </div>
    )
};

export default ClearButton;