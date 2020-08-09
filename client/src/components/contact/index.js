import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Template from "../template/index";
// import iphone from "../../images/iphonePic.png";
//not currently needed but may add in the future for an instagram carousel
import instagramLogo from "../../images/instagramLogo.png";
import gmailLogo from "../../images/gmailLogo.png";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import Clipboard from "react-clipboard.js";
// import { createPopper } from "@popperjs/core";
// import tippy from 'tippy.js';
// import 'tippy.js/dist/tippy.css'; // optional for styling
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const emailAddress = "ifbbprosatwork@gmail.com";

class Contact extends React.Component {
  state = {
    value: emailAddress,
    copied: false,
  };

  render() {
    return (
      <div className="contactContainer">
        <Template></Template>
        <div className="interested">Interested in Working With Us?</div>
        <a href="https://www.instagram.com/teamprosatwork/" target="blank">
          <div className="followUs">Click to Follow Us on Instagram!</div>
        </a>

        <Clipboard data-clipboard-text={this.state.value}>
          <div className="emailUs" onClick="copy">
            Click to Copy Our Email!
          </div>
        </Clipboard>

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
        <Clipboard data-clipboard-text={this.state.value}>
          <img src={gmailLogo} alt="gmail logo" className="gmailLogo"></img>
        </Clipboard>
      </div>
    );
  }
}
export default Contact;
