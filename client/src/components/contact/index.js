import React from "react";
import "./index.css";
import Template from "../template/index";
// import iphone from "../../images/iphonePic.png";
//not currently needed but may add in the future for an instagram carousel
import instagramLogo from "../../images/instagramLogo.png";
import gmailLogo from "../../images/gmailLogo.png";

export default function Contact() {
  return (
    <div className="contactContainer">
      <Template></Template>
      <div className="interested">Interested in Working With Us?</div>
      <a href="https://www.instagram.com/teamprosatwork/" target="blank">
        <div className="followUs">Click to Follow Us on Instagram!</div>
      </a>
      <div className="emailUs">Send Us an Email!</div>
      <div className="workWithUs">
        If you are interested in working with us, reach out and we will begin
        the process of adding you to the Team Pro’s At Work Family!
      </div>
      {/* add an a tag and wrap all of the image in it. dont forget target = blank. then work on copy to clipboard */}
      <a href="https://www.instagram.com/teamprosatwork/" target="blank">
        <img
          src={instagramLogo}
          alt="instagram logo"
          className="instagramlogo"
        ></img>
      </a>
      <img src={gmailLogo} alt="gmail logo" className="gmailLogo"></img>
    </div>
  );
}
