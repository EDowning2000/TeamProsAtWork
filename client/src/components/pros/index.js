import React from "react";
import "./index.css";
import Template from "../template/index";
import teamPic from "../../images/teamPic.jpg";

class Pros extends React.Component {
  render() {
    return (
      <div className="prosContainer">
        <Template></Template>
        <div className="meetUs">Meet The Pro's</div>
        <div className="description1">
          Before you begin working with us, we want to introduce ourselves!
        </div>
        <img
          src={teamPic}
          className="teamPic"
          alt="ferlan and natalia"
        ></img>
        <div className="description2">
          I am Natalia Coleho (Far Right), I'm 24 years old and was raised in Rio de
          Janeiro, Brazil. I currently reside in Orlando Florida, and am
          currently working on my masters Degree at the University of Central
          Florida, along with this I also have my Bachelors Degree from UCF in
          Sports and Exercise Science. I started training at the age of 15, and
          have been completely obsessed since! I turned Pro at the age of 19,
          the youngest age ever, and since then have accumulated 12 first place
          victories. The most notible of these being 2 Arnold Classic victories.
          Along with this, i have also participated in 5 Olympia competitions! I
          am excited to bring the same dedication that allowed me 2 Arnold
          classic victories to you and your physique!
        </div>
        <div className="description3">
          And I am Ferlan Bailey (Far Left)! Im originally from the Island of
          Grenada, but since the age of 13 I have been living in the Orlando
          Area! Before becoming an IFBB Pro, i worked as a Firefighter in
          Eustis, however now my time is fully devoted to Coaching, being home
          with family, and running my supplement brand. I turned pro in 2016 and
          have competed in numerous shows since then. Although i dont have plans
          of competing anytime soon, my love for bodybuilding is still a huge
          part of my life thanks to coaching.
        </div>
      </div>
    );
  }
}
export default Pros;
