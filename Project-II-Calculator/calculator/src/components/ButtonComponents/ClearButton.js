import React from 'react';
import './Button.css';

function clear() {
  return;
}

const ClearButton = () => {
  return (
    <div className="clear-button">
      <p onClick={clear()}>clear</p>
    </div>
    )
};

export default ClearButton;