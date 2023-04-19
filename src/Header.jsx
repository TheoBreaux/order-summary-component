import React from "react";
import Hero from "../images/illustration-hero.svg";
import MobileBackground from "../images/pattern-background-mobile.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img className="hero-image" src={Hero} alt="illustration" />
    </div>
  );
};

export default Header;
