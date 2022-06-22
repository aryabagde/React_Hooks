import React, { useRef } from "react";

// USE REF is mainly as a VIRTUAL DOM and it helps in accessing each element and their parameters

function RefTutorial() {
  const inputRef = useRef(null); // we will keep the initial value null

  const onClick = () => {
    inputRef.current.value = ""; // to empty the input field
    inputRef.current.focus(); //to focus the inout field again mostly used in forms
  };
  return (
    <div>
        <h3>4. USE REF</h3>
        {/* define the useref inside the element which we want to access*/}
        <input type="text" placeholder="Name" ref={inputRef} /> 
        <button onClick={onClick}>Change Name</button>
        <hr />
    </div>
  );
}

export default RefTutorial;