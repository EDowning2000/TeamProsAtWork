import React from "react";
import "./index.css";
import logo from "../../images/logo.png";

function template() {
  return (
    <div className="main">
      <img src={logo} className="logo"></img>
      <div className="nav">
        <div className="vision">Vision</div>
        <div className="contact">Contact</div>
        <div className="pros">The Pro's</div>
        <div className="emer">Made with 🖤 by Emerson D.</div>
      </div>
    </div>
  );
}
export default template;
