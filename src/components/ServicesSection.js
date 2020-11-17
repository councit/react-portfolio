import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="card">
          <div className="icon">
            <img src={clock} alt="clock"></img>
            <h3>Efficient</h3>
          </div>
          <p>this is filler text fill out later</p>
        </div>
        <div className="diaphragm">
          <div className="icon">
            <img src={diaphragm} alt="diaphragm"></img>
            <h3>Diaphragm</h3>
          </div>
          <p>this is filler text fill out later</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={money} alt="money"></img>
            <h3>Money</h3>
          </div>
          <p>this is filler text fill out later</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="teamwork"></img>
            <h3>teamwork</h3>
          </div>
          <p>this is filler text fill out later</p>
        </div>
      </div>
      <img src={home2} alt="another pic of me"></img>
    </div>
  );
};

export default ServicesSection;
