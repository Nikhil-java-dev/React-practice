import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HiH1 } from "react-icons/hi2";

// import Home from "./Home";
// import Signup from "./Signup";
const Home = lazy(() => import("./Home"));
const Signup = lazy(() => import("./Signup"));

const Routing1 = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing1;
