import React from "react";
import Post from "./case/postCSS/Post";
import Pure from "./case/pureCSS/Pure";
import Tailwind from "./case/tailwind/Tailwind";
import "./App.css";
import "./common.css";
import StyledComponents from "./case/styledComponents/StyledComponents";

function App(props) {
  return (
    <div className="container">
      <Pure />
      <Post />
      <StyledComponents />
      <Tailwind />
    </div>
  );
}

export default App;
