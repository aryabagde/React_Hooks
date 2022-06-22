import React, { useContext } from "react";
import { AppContext } from "./UseContextdemo";

function Login() {
  const { setUsername } = useContext(AppContext); // adding the variables which we want from the apcontext.provider
  // rest everything will remain same
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;