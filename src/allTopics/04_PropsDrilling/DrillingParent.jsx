import { useState } from "react";
import Child from "./Child";

const DrillingParent = () => {
  const [data, setData] = useState("");
  let str = "Hello World";
  let arr = [10, 20];
  let obj = { username: "Jhon Doe" };
  let greet = () => setData("Welcome!!!");

  return (
    <>
      <h1>DrillingParent component {data}</h1>
      <Child str={str} arr={arr} obj={obj} greet={greet} />
    </>
  );
};

export default DrillingParent;
