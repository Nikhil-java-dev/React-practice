import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const Counter = () => {
  let data = useContext(CounterContext);
  console.log(data);

  return (
    <div>
      <h1>counter {data.count}</h1>
      <button onClick={data.increment}>Increment</button>
      <button
        onClick={() => data.setCount((prev) => (prev > 0 ? prev - 1 : 0))}
      >
        Decrement
      </button>
      <button onClick={() => data.setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
