import { useReducer } from "react";
import { reducerFun, initialState } from "./counterState";

const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFun, initialState);
  return (
    <div>
      <h1>Learn useReducer {count}</h1>
      <button onClick={() => dispatch("incre")}>Increment</button>
      <button onClick={() => dispatch("decre")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Reducer;
