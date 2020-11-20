import React from "react";
import styled from "styled-components";

//images
import crwn from "../img/crwn-clothing.png";
import musicPlayer from "../img/music-player.png";
import a11y from "../img/a11y.png";

import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
  scrollReveal,
} from "../animation";

import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const Projects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Crwn-Clothing</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>

        <Hide>
          <motion.img
            variants={photoAnimation}
            src={crwn}
            alt="running athlete"
          ></motion.img>
        </Hide>
      </Movie>
      <Movie
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>Wave Music Player</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>

        <div className="img-wrapper">
          <img className="music-img" src={musicPlayer} alt="car chase"></img>
        </div>
      </Movie>
      <Movie
        variants={scrollReveal}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <h2>Web Accessibility Blog: My A11Y</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>

        <div className="img-container">
          <img src={a11y} alt="good times happy"></img>
        </div>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;

  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .music-img {
    max-width: 1140px;
  }
  .img-wrapper {
    display: flex;
    justify-content: center;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #1b1b1b;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #23d997;
`;

const Frame3 = styled(Frame1)`
  background: #d96ed4;
`;

const Frame4 = styled(Frame1)`
  background: #fff;
`;

export default Projects;
