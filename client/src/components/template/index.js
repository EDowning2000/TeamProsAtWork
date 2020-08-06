import React from "react";
import "./index.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Template() {
  return (
    <div className="mainContainer">
      <img src={logo} className="mainLogo" alt="main logo"></img>
      <Link to="/vision">
        <div className="vision">Vision</div>
      </Link>
      <Link to="/pros"></Link>
      <div className="pros">The Pro's</div>
      <Link to="/contact">
        <div className="contact">Contact</div>
      </Link>

      <a className="emer" href="https://github.com/EDowning2000">
        Made with 🖤 by Emerson D.
      </a>
    </div>
  );
}
