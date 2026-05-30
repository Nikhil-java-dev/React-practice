import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { userContext } from "../Context/UserContextProvider";

const Home = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <Navbar />

      <h2 style={{ padding: "20px", textAlign: "center" }}>Home Page</h2>
      <p style={{ padding: "10px", textAlign: "center", color: "gray" }}>
        Welcome {user.name}
      </p>
    </div>
  );
};

export default Home;
