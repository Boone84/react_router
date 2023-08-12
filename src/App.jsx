// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Orange from "./components/Orange";
import Purple from "./components/Purple";
import Gray from "./components/Gray";


function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/orange">Orange</Link>
        <Link to="/purple">Purple</Link>
        <Link to="/gray">Gray</Link>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/purple" element={<Purple />} />
          <Route path="/gray" element={<Gray />} />
          <Route path="/" element={<Home />} />
      
        </Routes>
      </div>
    </div>
  );
}

export default App;
