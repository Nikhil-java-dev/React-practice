const Child2 = ({
  data: {
    data1: Hii,
    data2: Byee,
    data3: { name },
  },
}) => {
  console.log(Hii, Byee, name);

  return (
    <>
      <h1> Child2 Component</h1>
      <h2>{Hii}</h2>
      <p>{Byee}</p>
      <h2>{name}</h2>
    </>
  );
};

export default Child2;
