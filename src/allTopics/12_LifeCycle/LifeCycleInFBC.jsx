import { useState, useEffect, useRef } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true); // {current: true}

  const handleCount = () => setCount((prev) => prev + 1);

  useEffect(() => {
    console.log("Component Mounted");

    const id = setInterval(() => console.log("API CALLED"), 2000);

    return () => {
      //cleanUp function
      console.log("Component Unmounted");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;

      return;
    }
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>Learn LifeCycle in function {count}</h1>
      <button onClick={handleCount}>Update</button>
    </div>
  );
};

export default LifeCycleInFBC;
