import { useState } from "react";

const StatesInFBC = () => {
  console.log("Hiii");

  const [count, setCount] = useState(0); // [undefined, fn]
  const incrmentCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Learn States In Function Based Component</h1>
      <h2>Counter : {count}</h2>
      <button onClick={incrmentCount}>Increment</button>
      <button onClick={decrementCount} disabled = {count === 0 ? true : false}>Decrement</button>
      <button onClick={reset} disabled = {count === 0 ? true : false}>Reset</button>
    </>
  );
};

export default StatesInFBC;

//! What IS STATE ?
// In React, state is a component's "memory". It is an object to store data that changes over time, such as user input, a shoping cart, or wether toggel is active.

//! WHAT IS useState ?
// useState is a React Hook that lets you add a state variable to your component.

//! HOW IT WORKS(Syntax)
// When you use it, it always returns an array consist of :
// 1) The current value (what's currently in the memory box).
// 2) A function to update it (the tool to put something new in the box).
