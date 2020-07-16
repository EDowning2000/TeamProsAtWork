import React from "react";
import "./index.scss";
import logo from "../../../images/ferlanandnataliapng.png";

function landingpage() {
  render(
    <div className="firstDiv">
      <input id="anPageName" name="page" type="hidden" value="landingpage" />
      <div className="landingpage anima-word-break ">
        <div className="secondDiv">
          <div className="tagline">
            <div className="thenleaveittothe">Then leave it to the Pro’s.</div>
            <div className="areyoulookingtoi">
              Are you looking to improve your lifestyle, win your next show, or
              just feel better?
              <br />
            </div>
          </div>

          <img
            alt="Team Pros at Work Logo"
            anima-src="./img/landing-page-ferlan-and-natalia-png@2x.png"
            className="ferlanandnataliapng"
            src={logo}
          />

          <div className="a2020byemersondown">2020 by emerson downing</div>
        </div>
      </div>
    </div>
  );
}
export default landingpage;
