import React from "react";
import styled from "styled-components";

//images
import crwn from "../img/crwn-small.png";
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
  const projectUrls = [
    "https://crwn-council.herokuapp.com/",
    "https://peaceful-mcclintock-0186b9.netlify.app/",
    "https://councit.github.io/100DaysOfCode/WebAccessibility/index.html",
  ];
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
        <Hide>
          <motion.h2 variants={fade}>Crwn-Clothing</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Hide>
            <ProjectWrapper>
              <div className="right-wrapper">
                <motion.img
                  variants={photoAnimation}
                  src={crwn}
                  alt="running athlete"
                ></motion.img>
              </div>
              <div className="left-wrapper">
                <motion.h3 variants={fade}>Overview</motion.h3>
                <motion.p variants={fade}>
                  Scalable e-commerce site to showcase high-end boutique
                  clothing. Clean reusable components and state management
                  created with React and Redux. Customer and site data validated
                  and stored using Google Firebase
                </motion.p>
                <motion.h3 variants={fade}>Technologies</motion.h3>
                <motion.ul variants={fade}>
                  <li>ReactJs</li>
                  <li>Redux</li>
                  <li>OAuth</li>
                  <li>Google Firebase</li>
                  <li>Stripe</li>
                  <li>Heroku</li>
                </motion.ul>
                <a href={projectUrls[0]} target="_blank" rel="noreferrer">
                  <motion.button variants={fade}>Check It Out!</motion.button>
                </a>
              </div>
            </ProjectWrapper>
          </Hide>
        </Hide>
      </Movie>
      <Movie
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>Web Accessibility Blog: My A11Y</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>

        <ProjectWrapper>
          <div className="right-wrapper">
            <motion.img
              variants={photoAnimation}
              src={musicPlayer}
              alt="running athlete"
            ></motion.img>
          </div>
          <div className="left-wrapper">
            <motion.h3 variants={fade}>Overview</motion.h3>
            <motion.p variants={fade}>
              Single page React music player. This quick and responsive
              application utilized stored API data to access a playlist I enjoy
              listening to while I code. The primary focus of this project was
              to utilize React Hooks to manage state. Click the link below to
              enjoy!
            </motion.p>
            <motion.h3 variants={fade}>Technologies</motion.h3>
            <motion.ul variants={fade}>
              <li>ReactJs</li>
              <li>SASS</li>
              <li>Font Awesome Icon</li>
              <li>Netlify</li>
            </motion.ul>
            <a href={projectUrls[1]} target="_blank" rel="noreferrer">
              <motion.button variants={fade}>Check It Out!</motion.button>
            </a>
          </div>
        </ProjectWrapper>
      </Movie>
      <Movie
        variants={scrollReveal}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <h2>Web Accessibility Blog: My A11Y</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>

        <ProjectWrapper>
          <div className="right-wrapper">
            <motion.img
              variants={photoAnimation}
              src={a11y}
              alt="running athlete"
            ></motion.img>
          </div>
          <div className="left-wrapper">
            <motion.h3 variants={fade}>Overview</motion.h3>
            <motion.p variants={fade}>
              Web accessibility application to teach best practices to new
              developers. Utilize semantic HTML, Tab Trapping, and showcasing
              Keyboard Navigation to simulate user experience. Highlight current
              tools to audit accessibility standards within developers’
              applications.
            </motion.p>
            <motion.h3 variants={fade}>Technologies</motion.h3>
            <motion.ul variants={fade}>
              <li>JavaScript</li>
              <li>HTMl</li>
              <li>CSS</li>
              <li>GitHub Pages</li>
            </motion.ul>
            <a href={projectUrls[2]} target="_blank" rel="noreferrer">
              <motion.button variants={fade}>Check It Out!</motion.button>
            </a>
          </div>
        </ProjectWrapper>
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
const ProjectWrapper = styled.div`
  h3 {
    color: black;
  }

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  h3 {
    font-size: 2rem;
    margin: 2rem 0;
  }
  .right-wrapper {
    width: 60%;
    img {
      height: auto;
    }
  }
  .left-wrapper {
    display: flex;
    max-width: 600px;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: black;
      font-size: 1.25rem;
      margin-right: 2ren;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      font-size: 1.25rem;
    }
  }

  button {
    width: 15rem;
    color: black;
    font-size: 1rem;
  }
  @media (max-width: 750px) {
    display: block;
    h3 {
      padding: 1rem;
    }
    .right-wrapper {
      width: 100%;
    }
    .left-wrapper {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
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
