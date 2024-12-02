import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#basics">Basics</a></li>
          <li><a href="#tips">Tips</a></li>
          <li><a href="#predict">Predict</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
