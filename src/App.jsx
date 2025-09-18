import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Body } from "./pages/Body";
function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
