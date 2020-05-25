import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import MainIcons from "./components/MainIcons/MainIcons";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Main />
      <MainIcons />
      <GlobalStyle />
    </>
  );
}

export default App;
