const maths = {
  "display": null, // set by display constructor upon creation, used to set display text
  "displayOperator": {}, // set by display constructor upon creation, used to change color of selected operator
  "currentValue": null,
  "storedValue": null,
  "storedOperator": null,
  "operators": [
    {symbol: "÷"},
    {symbol: "×"},
    {symbol: "-"},
    {symbol: "+"},
    {symbol: "="}
  ],

  "operands": [
    {value: "0"},
    {value: "1"},
    {value: "2"},
    {value: "3"},
    {value: "4"},
    {value: "5"},
    {value: "6"},
    {value: "7"},
    {value: "8"},
    {value: "9"},
  ],

  enterOperand(value) {
    if (typeof this.currentValue === "string" && this.currentValue !== "0") {
      if (this.currentValue.length < 11) {
        this.currentValue += value
      }
    } else {
      this.currentValue = value;
    };
    this.display.setState({displayValue: this.currentValue});
  },

  enterOperator(symbol) {
    switch(symbol) {
      case "÷":
        this.operationDiv();
        break;
      case "×":
        this.operationMul();
        break;
      case "-":
        this.operationSub();
        break;
      case "+":
        this.operationAdd();
        break;
      case "=":
        this.operationEqu();
        break;
  }},

  operationDiv() {
    if (this.storedValue !== null && this.currentValue !== null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
      this.lengthCheck();
      this.display.setState({displayValue: this.currentValue})
    } else if (this.currentValue !== null) {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    } else {
      return
    }
    
    this.storedOperator = "div";
    this.toggleOperatorClass("index0");
  },

  operationMul() {
    if (this.storedValue !== null && this.currentValue !== null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
      this.lengthCheck();
      this.display.setState({displayValue: this.currentValue})

    } else if (this.currentValue !== null) {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    } else {
      return
    }
    
    this.storedOperator = "mul";
    this.toggleOperatorClass("index1");
  },
  
  operationSub() {
    if (this.storedValue !== null && this.currentValue !== null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
      this.lengthCheck();
      this.display.setState({displayValue: this.currentValue})

    } else if (this.currentValue !== null) {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    } else {
      return
    }
    
    this.storedOperator = "sub";
    this.toggleOperatorClass("index2");
  },

  operationAdd() {
    if (this.storedValue !== null && this.currentValue !== null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
      this.lengthCheck();
      this.display.setState({displayValue: this.currentValue})
    } else if (this.currentValue !== null) {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    } else {
      return
    }
    
    this.storedOperator = "add";
    this.toggleOperatorClass("index3");
  },

  operationEqu(){
    if (this.storedValue !== null && this.currentValue !== null) {
      switch(this.storedOperator) {
        case "div":
          this.currentValue = this.storedValue / Number(this.currentValue);
          break;
        case "mul":
          this.currentValue = this.storedValue * Number(this.currentValue);
          break;
        case "sub":
          this.currentValue = this.storedValue - Number(this.currentValue);
          break;
        case "add":
          this.currentValue = this.storedValue + Number(this.currentValue);
          break;
        default: this.currentValue = null;
      }
      this.lengthCheck();
      this.display.setState({displayValue: this.currentValue})

    } else if (this.storedValue !== null) {
      this.currentValue = this.storedValue.toString();
    }
    
    this.storedValue = null;
    this.storedOperator = null;
    this.toggleOperatorClass();
  },

  toggleOperatorClass(index) {
    this.displayOperator.index0.setState({selected: false});
    this.displayOperator.index1.setState({selected: false});
    this.displayOperator.index2.setState({selected: false});
    this.displayOperator.index3.setState({selected: false});
    if (index) {this.displayOperator[index].setState({selected: true})};
  },

  lengthCheck() {
    if (typeof this.currentValue !== "number") {return}
    let currentLength = this.currentValue.toFixed(0)
    if (currentLength.length > 10) {
      this.currentValue = "ERR"
    } else {
      this.currentValue = +this.currentValue.toFixed(10 - currentLength.length);
    }
  }, // Use this whenever this.currentValue has been converted to a number.

  clear() {
    this.currentValue = null;
    this.storedValue = null;
    this.storedOperator = null;
    this.toggleOperatorClass();
    this.display.setState({displayValue: this.currentValue})
  },

  debug() {
    console.log("\n","current value:",this.currentValue,"\n","stored value:",this.storedValue,"\n","stored operator:",this.storedOperator);
  }
}

export default maths;