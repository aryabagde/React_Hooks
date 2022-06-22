import React, { useReducer } from "react";

//Use reducer is similar to Use State. It is used when you want to control multiple Use State variables simultaneously

const reducer = (state, action) => {   // state is an object that contains all the variable values 
  switch (action.type) { // depending on the action the values of state.<variable> changes
    case "INCREMENT": // these action names are defined by users 
      return { count: state.count + 1, showText: state.showText }; // condition after this action
    case "toggleShowText": // we give as many conditions as we want
      return { count: state.count, showText: !state.showText };  // we need to return the object state, if we ned to modify the old value just use state.<variable>
    default:   // in every switch case we need to define a default case
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });  // declaration is similar to useState ||state is the object which containes the value of all the variables and dispatch is the function to call usereducer
  //  reducer is the function to define the changes in states due to action type
  return (
    <div>
        <h3>2. USE REDUCER</h3>
        <h4>after clicking the button the value will be incremented as well as the text will reappear and disappear alternatively</h4>
        <h1>{state.count}</h1>
        {/* to define the variables we will use <object_defined>.<variable> or state.count or state.showText 
          and to call useReducer we will use dispatch function with parameters defining the action make sure it is 1 of the switch cases
          We can see the values of that variable will be chnaged automatically
        */}
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          Click Here
        </button>
        {/* when the showtext is true then only the text will be displayed */}
        {state.showText && <p>This is a sample text</p>} 
        <hr />
    </div>
  );
};

export default ReducerTutorial;