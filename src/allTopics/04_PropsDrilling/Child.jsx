import NestedChild from "./NestedChild";
const Child = (props) => {
  console.log(props);

  return (
    <>
      <h1>Child component</h1>
      <NestedChild props={props} />
    </>
  );
};

export default Child;
