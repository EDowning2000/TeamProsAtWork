import React from "react";
import "./index.css";
import Template from "../template/index";

export default function Contact() {
  return (
    <div className="contactContainer">
      <Template></Template>
      <div className="interested">Interested in Working With Us?</div>
      <div className='followUs'>Follow Us on Instagram!</div>
      <div className='emailUs'>Send Us an Email!</div>
      <div className='workWithUs'></div>
    </div>
  );
}
