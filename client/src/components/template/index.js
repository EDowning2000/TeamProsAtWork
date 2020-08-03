import React from "react";
import "./index.css";
import logo from "../../images/logo.png";

export default function Template() {
  return (
    <div className="mainContainer">
      <img src={logo} className="mainLogo" alt="main logo"></img>
      <div className="vision">Vision</div>
      <div className="pros">The Pro's</div>
      <div className="contact">Contact</div>
      <a className="emer" href="https://github.com/EDowning2000">Made with 🖤 by Emerson D.</a>
    </div>
  );
}
