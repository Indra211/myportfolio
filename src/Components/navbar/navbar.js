// Navbar.js
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        fontFamily: "Poppins-Bold",
        justifyContent: "center",
        backgroundColor: "#000000aa",
        color: "white",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        <a href="#home" className="navbar-btn">
          Home
        </a>
        <a href="#about" className="navbar-btn">
          About
        </a>
        <a href="#resume" className="navbar-btn">
          Resume
        </a>
        <a href="#contact" className="navbar-btn">
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
