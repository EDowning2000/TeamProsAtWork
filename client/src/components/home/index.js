import React from "react";
import "./index.css";
import Template from "../template/index";
// import natPic from "../../images/natPic.jpg";
import natPic2 from "../../images/arnold2.JPG";
// import { Link } from 'react-router0-dom';

export default function Home() {
  return (
    <div className="homeContainer">
      <Template></Template>
      <img src={natPic2} alt="Natalia at Olympia" className="natPic"></img>
      <div className="homeMotto">
        A big part of our lives is eating, recovering, and going to the gym. But
        even IFBB Pro’s have to work. Get all your information from the people
        who not only do this for a living, but also who have made it, The Pro’s.{" "}
      </div>
      <div className="homeRectangle1"></div>
      <div className="teamProsAtWorkHome">Team Pro’s At Work</div>
      <div className="contestPrep">Contest Prep And Lifestyle Coaching</div>
      <div className="homeRectangle1"></div>
      {/* <div className="homeRectangle2"></div> */}
    </div>
  );
}
