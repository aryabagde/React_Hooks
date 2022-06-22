import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {   //forward ref allows to take ref from parent component
  const [toggle, setToggle] = useState(false); // this is a useState function to toggle the label

  useImperativeHandle(ref, () => ({
    alterToggle() {                      //adding the useState function inside useImperitive
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;