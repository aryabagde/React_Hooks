import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";
// This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props.
// It basically removes prop-drilling
//USE CONTEXT is used to ease the process of accessing props every file rather than passing them every time
export const AppContext = createContext(null); // function is initiated 

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    // add the variables which we want to add as parameters 
    <AppContext.Provider value={{ username, setUsername }}>  
      <h3>7. USE CONTEXT</h3>
      <Login /> <User />
      <hr />
    </AppContext.Provider>
  );
}

export default ContextTutorial;