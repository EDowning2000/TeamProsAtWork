import React from "react";
import "./index.scss";
import logo from "../../../images/ferlanandnataliapng.png";

function contact() {
  render(
    <div className="firstDiv">
      <input id="anPageName" name="page" type="hidden" value="contact" />
      <div class="contact anima-word-break ">
        <div className="secondDiv">
          <img
            alt="Team Pros at Work Logo"
            anima-src="./img/landing-page-ferlan-and-natalia-png@2x.png"
            class="ferlanandnataliapng"
            src={logo}
          />
          <div class="a2020byemersondown">2020 by emerson downing</div>
          <div class="interestedinworkin">Interested in working with us?</div>
        </div>
      </div>
    </div>
  );
}
export default contact;
