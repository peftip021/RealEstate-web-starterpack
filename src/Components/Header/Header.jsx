import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="h-container">
        <img src="../logo.png"/>
        <div className="h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
