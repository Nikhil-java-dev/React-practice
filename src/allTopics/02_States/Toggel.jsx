import { useState } from "react";

const ToggelComponent = () => {
  const [toggel, setToggel] = useState(false);
  const [data, setData] = useState("Hello World");

  const updateToggel = () => setToggel((prev) => !prev);

  return (
    <>
      {/* conditional Rendering */}
      <h1>{data}</h1>
      <button onClick={() => setData("Byee World")}>Change</button>
      <hr />

      <h1>Learning Short Circuit conditional operator</h1>
      <button onClick={updateToggel}>Toggel me</button>
      {toggel && <h1> Toggel Example </h1>}
    </>
  );
};

export default ToggelComponent;
