import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorButtons from './components/ButtonComponents/CalculatorButtons'
// import maths from './components/Maths'

const App = () => {
  return (
    <div>
      <div className="calculator-container">
          <CalculatorDisplay />
          <CalculatorButtons />
      </div>
      {/* <div className="debug-button" onClick={function(){maths.debug()}}>DEBUG</div> */}
      <p className="brag-text">Calculator is now functional!<br/>For more info, check out README.md</p>
    </div>
  );
};

export default App;
