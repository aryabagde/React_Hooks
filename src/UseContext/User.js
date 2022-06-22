import React, { useContext } from "react";
import { AppContext } from "./UseContextdemo";

function User() {
  const { username } = useContext(AppContext); // adding the variables from appcontext

  return (
    <div>
      <h3>User: {username}</h3>
    </div>
  );
}

export default User;