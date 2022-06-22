import axios from "axios";
import { useEffect, useState, useMemo } from "react";

//Main reson to use USE MEMO is to increase performance and decrease latency on huge computations that we make throught application
// It is used for advanced level

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);                                     // API call using axios with no value in dependency array

  const findLongestName = (comments) => {    // this is a algo to find the longest comment from data that we retrieved from API
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");      // console log after running the function so that we would know how many times the function was executed

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]); // MEMO function will only run when there is any change in toggle state
  // like useeffect usememo also has dependency array  
  //without USEMEMO our function will be executed every time our page re-renders coz data is called everytime using USEEFFECT 
  // so to increase the performance we will not let the function run every time the page re-renders 
  return (
    <div className="App">
      <div> {getLongestName} </div>
      <h3>8. USE MEMO</h3>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
      <hr />
    </div>
  );
}