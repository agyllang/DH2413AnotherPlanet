import React, { useState, useEffect } from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./App.css";
import About from "./components/About/about";
import Home from "./components/Home/home";
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
            className="navlink"
            to="/"
            // key={"home"}
            // end={true}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="navlink-active"
            className="navlink"
            to="/about"
            // key={"about"}
          >
            About Us
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
