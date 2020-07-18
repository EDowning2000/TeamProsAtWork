import React from "react";
import "./index.scss";
import logo from "../../../images/ferlanandnataliapng.png";

function vision() {
  return(
    <div className="firstDiv">
      <input id="anPageName" name="page" type="hidden" value="vision" />
      <div className="vision anima-word-break ">
        <div className="secondDiv">
          <img
            alt="Team Pros at Work Logo"
            anima-src="./img/landing-page-ferlan-and-natalia-png@2x.png"
            className="ferlanandnataliapng"
            src={logo}
          />
          <div className="a2020byemersondown">2020 by emerson downing</div>
          <div className="ourvisionforeach">
            Our vision for each and every one of our clients is to watch them
            transform into a version of themselves, they didnt even know was
            possible.  
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default vision;
