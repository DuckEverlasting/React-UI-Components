const maths = {
  "display": null, // set by display constructor upon creation
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
    if (typeof this.currentValue === "string") {
      this.currentValue += value
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
    if (this.storedValue != null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
    } else {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    }
    
    this.storedOperator = "div";
    this.display.setState({displayValue: this.currentValue})
  },

  operationMul() {
    if (this.storedValue != null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
    } else {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    }
    
    this.storedOperator = "mul";
    this.display.setState({displayValue: this.currentValue})
  },
  
  operationSub() {
    if (this.storedValue != null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
    } else {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    }
    
    this.storedOperator = "sub";
    this.display.setState({displayValue: this.currentValue})
  },

  operationAdd() {
    if (this.storedValue != null) {
      this.operationEqu();
      this.storedValue = this.currentValue;
    } else {
      this.storedValue = Number(this.currentValue);
      this.currentValue = null;
    }
    
    this.storedOperator = "add";
    this.display.setState({displayValue: this.currentValue})
  },

  operationEqu(){
    if (this.storedValue !== 0) {
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
        default: this.currentValue = this.storedValue;
      }
      this.storedValue = null;
      this.storedOperator = null;
      this.display.setState({displayValue: this.currentValue})
    }
  },

  clear() {
    if (this.currentValue !== 0) {
      this.currentValue = null;
      this.storedValue = null;
      this.storedOperator = null;
      this.display.setState({displayValue: this.currentValue})
    }
  },

  debug() {
    console.log("\n","current value:",this.currentValue,"\n","stored value:",this.storedValue,"\n","stored operator:",this.storedOperator);
  }
}

export default maths;