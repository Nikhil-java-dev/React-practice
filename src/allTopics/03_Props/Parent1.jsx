import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
const Parent1 = () => {
  let data1 = "Hiii";
  let data2 = "Byee";
  let data3 = { name: "jhon" };
  return (
    <>
      <h1>Child Componenet</h1>
      <Child1 prop1={data1} prop2={data2} prop3={data3} />
      <Child2 data={{data1, data2, data3}}/>
      <Child3 prop1={data1} prop2={data2} prop3={data3} />
    </>
  );
};

export default Parent1;
