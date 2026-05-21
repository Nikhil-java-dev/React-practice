import { useState } from "react";

const Heart = () => {
  const [likes, setLikes] = useState(0);

  const updateLikes = () => {
    setLikes((pre) => pre + 1);
  };

  return (
    <>
    <h1>Insta Like Button</h1>
      <span onClick={updateLikes}>
        ❤️ <sup>{likes}</sup>
      </span>
    </>
  );
};

export default Heart;
