const NestedChild = ({ props }) => {
  console.log(props); //{props:{}}
  let { str, arr, obj, greet } = props;

  return (
    <>
      <h1>NestedChild component</h1>
      <h2>{str} </h2>
      <h2> {arr}</h2>
      <h2>{obj.username}</h2>
      <button onClick={greet}>Greet</button>
    </>
  );
};

export default NestedChild;
