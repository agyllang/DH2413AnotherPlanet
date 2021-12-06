import React, { useState, useEffect } from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./App.css";
import About from "./components/About/about";
import Home from "./components/Home/home";
import Game from "./components/Game/game";
const Dummy = (title) => {
  return (
    <Container>
      <Row className="page-title"> {title} </Row>
    </Container>
  );
};
function App() {
  return (
    <div className="App">
        <div className="navbar">
          <NavLink
            activeClassName="navlink-active"
            className="navbar-item"
            to="/"
            // key={"home"}
            // end={true}
          >
            H O M E
          </NavLink>
          <NavLink
            activeClassName="navlink-active"
            className="navbar-item"
            to="/game"
            // key={"home"}
            // end={true}
          >
            G A M E
          </NavLink>
          <NavLink
            activeClassName="navbar-item active"
            className="navbar-item"
            to="/about"
            // key={"about"}
          >
            A B O U T
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/game" element={<Game/>} />
        </Routes>
    </div>
  );
}

export default App;
