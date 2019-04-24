import React from 'react';
import './Display.css';
import maths from '../Maths';

class CalculatorDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: maths.currentValue
    };
    maths.display = this;
  }
  render(){
    return (
      <div className="calculator-display">
        <p>{this.state.displayValue}</p>
      </div>
    )
  }
}

export default CalculatorDisplay