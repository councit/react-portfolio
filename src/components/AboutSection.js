import React from "react";
import { Link } from "react-router-dom";
import home1 from "../img/home-create.svg";
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
            <motion.h2 variants={titleAnimation}>
              My Passion is to make
            </motion.h2>
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
          Contact me for any web development oppurtunities you have. I am
          deticated to providing you with the best solution that you{" "}
          <span>love.</span>
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
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
