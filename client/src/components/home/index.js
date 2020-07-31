import React from "react";
import "./index.sass";
import template from "../template/index";

function home() {
  return (
    <div className="container">
      <img className="photo" src={nat}></img>
      <div className="tpaw">Team Pro's At Work</div>
      <div className="coaching">Contest Prep And Lifestyle Coaching</div>
      <div className='banner1'></div>
      <div className='banner2'></div>
      <div className='homeMotto'>A big part of our lives is eating, recovering, and going to the gym. But even IFBB Pro’s have to work. Get all your information from the people who not only do this for a living, but also who have made it, The Pro’s. </div>
      
    </div>
  );
}
export default home;
