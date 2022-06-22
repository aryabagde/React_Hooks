import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Heyy");  //inputValue is the variable and setInputvalue is the function that changes the value of inputValue | UseState is the declraion of hook and Heyy is the initial value of inputValue
  const [count, setcount] = useState(0); // the name of the variable and function can be anything but make sure to name function as Setvariable for easy identification | here the initial value of count is 0

  let onChange = (event) => {     // the demand of onChange value in input parameter is variable
    const newValue = event.target.value;  // value of input field
    setInputValue(newValue); //setting new value of Input value 
  };

  const increment = () =>{  //the demand of onClick value is function
      setcount(count + 1)   // function setting new value of count
  }

  return (
    <div>
      <hr />
      <h3>1. USE STATE</h3>
      <h4>(a) label getting auto updated while the user types</h4>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}<br /><br />   
      {/* javascript variable inside html */}
      <h4>(b) value of Counter label increases after clicking button</h4>
      <h1>{count}</h1>
      <button onClick={increment}> Increment </button>
      <hr />
    </div>
  );
};

export default StateTutorial;