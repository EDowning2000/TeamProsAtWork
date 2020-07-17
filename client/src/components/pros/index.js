import React from "react";
import "./index.scss";
import logo from "../../../images/ferlanandnataliapng.png";

function pros() {
  render(
    <div className="firstDiv">
      <input id="anPageName" name="page" type="hidden" value="thepros" />
      <div className="thepros anima-word-break ">
        <div className="secondDiv">
          <img
            alt="Team Pros at Work Image"
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
export default pros;
