import React from 'react';
import './Button.css';
import maths from '../Maths'

class OperatorButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    maths.displayOperator[`index${this.props.index}`] = this;
  }

  render() {
    return (
      <div
       className={this.state.selected ? "operator-button selected" : "operator-button"}
       onClick={() => {maths.enterOperator(this.props.button.symbol)}}
      >
        <p>{this.props.button.symbol}</p>
      </div>
    )
  }
};

export default OperatorButton;