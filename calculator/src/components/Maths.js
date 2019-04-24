const maths = {
  "display": null, // set by display constructor upon creation, used to set display text
  "displayOperator": {}, // set by display constructor upon creation, used to change color of selected operator
  "currentValue": null,
  "storedValue": null,
  "storedOperator": null,
  "repeatGuard": false, // protects from multiple operators being stacked on top of one another without a number in between
  "decimalGuard": false,
  "operators": [
    {symbol: "÷"},
    {symbol: "×"},
    {symbol: "-"},
    {symbol: "+"},
    {symbol: "="}
  ],

  "operands": [
    {value: "neg", style: "light"},
    {value: "0", style: "bold"},
    {value: ".", style: "bold"},
    {value: "1", style: "bold"},
    {value: "2", style: "bold"},
    {value: "3", style: "bold"},
    {value: "4", style: "bold"},
    {value: "5", style: "bold"},
    {value: "6", style: "bold"},
    {value: "7", style: "bold"},
    {value: "8", style: "bold"},
    {value: "9", style: "bold"},
  ],

  enterOperand(value) {
    this.repeatGuard = false;
    if (typeof this.currentValue === "string" && this.currentValue !== "0") {
      if (this.currentValue.length < 11) {
        if (value === "." && this.decimalGuard === false) {
          this.currentValue += value;
          this.decimalGuard = true;
        } else if (value === "." && this.decimalGuard === true) {
          return;
        } else if (value === "neg") {
          return;
        } else {
        this.currentValue += value
        }
      }
    } else if (value === ".") {
      if (this.decimalGuard === true) {return};
      this.currentValue = "0.";
      this.decimalGuard = true;
    } else if (value === "." && this.decimalGuard === true) {
      return;
    } else if (value === "neg") {
      return;
    } else {
      this.currentValue = value;
    };
    this.display.setState({displayValue: this.currentValue});
  },

  enterOperator(symbol) {
    if (symbol === "=") {
      this.operationEqu();
      return;
    } else if (this.repeatGuard === true) {
      return;
    }
    
    this.repeatGuard = true;

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
      default: break;
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
      this.decimalGuard = false;
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
      this.decimalGuard = false;
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
      this.decimalGuard = false;
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
      this.decimalGuard = false;
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
        default: 
          this.currentValue = null;
          break;
      }
      this.lengthCheck();
      this.display.setState({displayValue: this.currentValue})
      this.decimalGuard = false;

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
    this.decimalGuard = false;
    this.toggleOperatorClass();
    this.display.setState({displayValue: this.currentValue})
  },

  debug() {
    console.log("\n","current value:",this.currentValue,"\n","stored value:",this.storedValue,"\n","stored operator:",this.storedOperator);
  }
}

export default maths;