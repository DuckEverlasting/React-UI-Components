const maths = {
  "display": null, // set by display constructor upon creation
  "currentValue": 0,
  "storedValue": 0,
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
    console.log(this.currentValue);
  },

  enterOperator(symbol) {
    switch(symbol) {
      case "÷":
        this.operationDiv();
        break;
      case "*":
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
    this.storedValue /= Number(this.currentValue);
    this.currentValue = null;
    this.storedOperator = "div"
    this.display.setState({displayValue: this.currentValue})
  },

  operationMul() {
    this.storedValue *= Number(this.currentValue);
    this.currentValue = null;
    this.storedOperator = "mul"
    this.display.setState({displayValue: this.currentValue})
  },
  
  operationSub() {
    this.storedValue -= Number(this.currentValue);
    this.currentValue = null;
    this.storedOperator = "sub"
    this.display.setState({displayValue: this.currentValue})
  },

  operationAdd() {
    this.storedValue += Number(this.currentValue);
    this.currentValue = null;
    this.storedOperator = "add"
    this.display.setState({displayValue: this.currentValue})
  },

  operationEqu(){
    if (this.storedValue !== 0) {
      switch(this.storedOperator) {
        case "div":
          this.currentValue = Number(this.currentValue) / this.storedValue;
          break;
        case "mul":
          this.currentValue = Number(this.currentValue) * this.storedValue;
          break;
        case "sub":
          this.currentValue = Number(this.currentValue) - this.storedValue;
          break;
        case "add":
          this.currentValue = Number(this.currentValue) + this.storedValue;
          break;
        default: this.currentValue = this.storedValue;
      }
      this.storedValue = 0;
      this.storedOperator = null;
      this.display.setState({displayValue: this.currentValue})
    }
  },

  clear() {
    if (this.currentValue !== 0) {
      this.currentValue = 0;
      this.storedValue = 0;
      this.storedOperator = null;
      this.display.setState({displayValue: this.currentValue})
    }
  },
}

export default maths;