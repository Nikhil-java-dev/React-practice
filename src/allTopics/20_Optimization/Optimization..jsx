import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Optimization = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const handleIncrement = () => setAdd((prev) => prev + 1);
  const handleDecrement = () => setMinus((prev) => prev - 1);

  //   const multiply = () => {
  //     console.log("multiply");
  //     return add * 5;
  //   };

  //! it returned memoized value
  const multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //! it returned memoized Function
  const data = useCallback(() => {
    console.log("I am data fun");
  }, []);

  return (
    <div>
      <h1>Learn Optimization</h1>
      <hr />
      <section>
        <h3>Addition {add}</h3>
        <button onClick={handleIncrement}>Increment</button>
      </section>
      <hr />

      <section>
        <h3>Subtraction {minus}</h3>
        <button onClick={handleDecrement}>Decrement</button>
      </section>
      <hr />

      <section>
        <h3>Multiplicattion is {multiply}</h3>
      </section>
      <hr />
      <Child data={data} />
    </div>
  );
};

export default Optimization;
