import React from "react";
import { About } from "../styles.js";
import taylor from "../img/taylor-big.png";
import styled from "styled-components";

const AboutMeDetail = () => {
  return (
    <AboutMe>
      <h2>About Me</h2>
      <img src={taylor} alt="Taylor Council"></img>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </AboutMe>
  );
};

const AboutMe = styled(About)`
  display: flex;
  justify-content: start;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 2rem 10rem;
  img {
    padding-top: 2rem;
    border-radius: 50%;
    max-width: 400px;
  }
  p {
    max-width: 1200px;
    padding: 4rem 10rem;
  }
`;

export default AboutMeDetail;
