import React, { useRef } from "react";
import Button from "./Button";
//Use imparitive Handle is used to alter the state of element which is the child
// we cannot add red={buttonRef} in child button directly we need to add forward ref and use imaritive in child

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h3>6. USE IMPERITIVE HANDLE</h3>   
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent 
      </button>
      <Button ref={buttonRef} />
      <hr />
    </div>
  );
}

export default ImperativeHandle;