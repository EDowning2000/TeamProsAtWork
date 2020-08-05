import React from "react";
import "./index.css";
import Template from "../template/index";
import iphone from "../../images/iphonePic.png";
import instagramPic from "../../images/instagramLogo.png";
import gmailPic from "../../images/gmailLogo.png";

export default function Contact() {
  return (
    <div className="contactContainer">
      <Template></Template>
      <div className="interested">Interested in Working With Us?</div>
      <div className="followUs">Follow Us on Instagram!</div>
      <div className="emailUs">Send Us an Email!</div>
      <div className="workWithUs">
        If you are interested in working with us, reach out and we will begin
        the process of adding you to the Team Pro’s At Work Family!
      </div>
      <img
        src="instagramPic"
        alt="instagram logo"
        className="instagramPic"
      ></img>
      <img src="gmailPic" alt="gmail logo" className="gmailLogo"></img>
    </div>
  );
}
