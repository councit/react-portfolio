import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any project ideas you have. I am deticated to providing
          you with the best product that you <span>love.</span>
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="taylor council"
        ></motion.img>
      </Image>
      <Wave />
    </About>
  );
};

//styled component

export default AboutSection;
