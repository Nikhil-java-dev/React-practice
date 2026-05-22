import { useEffect, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    console.log("Application Mounted");
  }, []);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    console.log("Application updated");
  }, [count]);
  return (
    <>
      <h1>Learn Life Cycle</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default LifeCycleInFBC;
