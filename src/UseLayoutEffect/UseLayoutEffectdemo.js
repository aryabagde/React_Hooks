import { useLayoutEffect, useEffect, useRef } from "react";

//UseLayout Effect is is similar to use effect, the function is executed after the page re-renders
// The only difference is USE EFFECT is executed after the page is re-rendered
// WHEREAS the USE EFFECT LAYOUT is executed on the early stage of page building

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);  // You can see that the value console.logged is REACT instead of HELLO
  }, []); // coz Use layout effect is executed even before the use effect

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);   // The syntax are same for both. Also u can see after reloading, you can slightly see REACT first for few milliseconds and then HELLO

  return (
    <div className="App">
        <h3>5. USE LAYOUT EFFECT</h3>
        <input ref={inputRef} value="REACT" style={{ width: 400, height: 60 }} />
        <hr />
    </div>
  );
}

export default LayoutEffectTutorial;