import React from "react";

const Child = ({ data }) => {
  console.log("I am Child Comp");

  return (
    <div>
      <h1>Child Comp{data}</h1>
     
    </div>
  );
};

export default React.memo(Child);
//! It is used to memoize a component until props are unchange
