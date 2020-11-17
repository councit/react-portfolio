import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact me for any project ideas you have. I am deticated to providing
          you with the best product that you <span>love.</span>
        </p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={home1} alt="profile image of taylor council"></img>
      </div>
    </div>
  );
};

export default AboutSection;
