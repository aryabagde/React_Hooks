import React, { useEffect, useState } from "react";
import axios from "axios"; //library used for making api calls

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {      // what ever we add in this function will be called when the page re-renders
    // as we know the page re-renders after each amall change in  every state(using use state and userender)
    axios
      .get("https://jsonplaceholder.typicode.com/comments") // api fetch
      .then((response) => {    // we can grab the response and use in the below function
        setData(response.data[0].email); // to check the data just use response.data
        console.log("API WAS CALLED");
      });
  }, [count]); //If we see closely whenever the site re-renders for the first time it runs the useEffect function as a result 
    //the api is fetched and the value of data is changed which triggers the useeffect function again resulting in 2 times console.log function'
    //So to make sure that the useEffect function does not trigger again we will add a blank array 
    // The array defines the variables which will trigger the useEffect function everytime their value changes (States trigger them to re-render)
    // Here the use effect will only run for count variable
  return (
    <div>
        <h3>3. USE EFFECT</h3>
        <h4>{data}</h4>
        <h1>{count}</h1>
        <button
            onClick={() => {
            setCount(count + 1);
            }}
        >
            Click
        </button>
        <hr />
    </div>
  );
}

export default EffectTutorial;