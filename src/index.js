import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pure from "./case/pureCSS/Pure";
import Post from "./case/postCSS/Post";
import Tailwind from "./case/tailwind/Tailwind";
import Flowbite from "./case/flowbite/Flowbite";
import "./common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Pure />
      <Post />
      <Tailwind />
      <Flowbite />
    </div>
  </React.StrictMode>
);
