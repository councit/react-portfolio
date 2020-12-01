import React from "react";
import react from "../img/react.svg";
import javascript from "../img/js.svg";
import css from "../img/css3.svg";
import html from "../img/html5.svg";
import leader from "../img/leader.svg";
import communication from "../img/communication.svg";
import styled from "styled-components";
import { About, Description } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          Skills that <span>matter.</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={react} alt="react"></img>
              <h3>ReactJs</h3>
            </div>
            <p>I build dynamic React applications that scale.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={javascript} alt="javascript"></img>
              <h3>JavaScript</h3>
            </div>
            <p>
              I create custom functions and tools to provide flexible and robust
              solutions.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={css} alt="css"></img>
              <h3>CSS</h3>
            </div>
            <p>I bring design to life using tools such as CSS and SASS</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={html} alt="html"></img>
              <h3>HTML</h3>
            </div>
            <p>
              Using semantic HTML, I ensure that my applications can be accessed
              by all users.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={leader} alt="leadership"></img>
              <h3>Leadership</h3>
            </div>
            <p>
              I have ample experience managing large cross-functional teams.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={communication} alt="communication"></img>
              <h3>Communication</h3>
            </div>
            <p>
              My customers are my number one priority. I ensure that the needs
              are clearly understood by all stakeholders.
            </p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
`;

export default ServicesSection;
