//! REACT WAY

import { createRoot } from "react-dom/client";
import App from "./App";

//global css
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);

// import { createRoot } from "react-dom/client";
// createRoot(document.getElementById("root")).render(
//     <>
//         <h1>Hello React</h1>
//         <h2>Hii</h2>
//     </>,
// );

// <></> ---> Fragments

//! JS WAY
// const divTag = document.getElementById("root");
// const h1tag = document.createElement("h1");
// h1tag.textContent = "Hello React! using JS way";
// divTag.append(h1tag);
