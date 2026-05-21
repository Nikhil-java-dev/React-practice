import { useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackParent = () => {

  const[data, setData] = useState("");

  function getData(value){
    console.log(value);// receiving data from child
    setData(value);
    

  }
  return (
    <>
      <h1>Learn Callback in React {data}</h1>
      <CallbackChild getData={getData} />
    </>
  );
};

export default CallbackParent;
