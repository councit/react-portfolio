import React from "react";
import home1 from "../img/home1.png";

import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact me for any project ideas you have. I am deticated to providing
          you with the best product that you <span>love.</span>
        </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={home1} alt="taylor council"></img>
      </Image>
    </About>
  );
};

//styled component

export default AboutSection;
