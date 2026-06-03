import { useDispatch, useSelector } from "react-redux";
import { decre, incre, reset } from "./counterSlice";

const ReduxCounter = () => {
  //! useSlector() used to access redux state and return it
  let count = useSelector((state) => state.counter);

  //! useDispatch() return dispatch function which is used to call actions
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incre(100));
  };
  const handleDecrement = () => {
    dispatch(decre(5));
  };

  return (
    <div>
      <h1>Redux-Counter {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default ReduxCounter;
