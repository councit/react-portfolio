import React, { useState } from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import filler from "../img/undraw_phone_call_grmk 1.svg";

import emailjs from "emailjs-com";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m0e2wsc",
        "template_ld2yphr",
        e.target,
        "user_evTX5gg4m1Uk6sM1nEYVw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFirstName("");
    setEmail("");
    setMessage("");
  }

  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <div className="left-wrapper">
        <h2>I Can't Wait To Hear</h2>
        <h2>From You</h2>
        <img src={filler} alt="waiting for a call"></img>
      </div>
      <div className="right-wrapper">
        <h2>Lets Talk.</h2>
        <form onSubmit={sendEmail}>
          <div className="name-wrapper">
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="email-wrapper">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="message-wrapper">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" value="send">
            Send It!
          </button>
        </form>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  display: flex;
  color: #353535;
  height: 100vh;
  label {
    font-size: 1.25rem;
    font-weight: bold;
  }
  input {
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    display: block;
    margin: 1.5rem 0;
  }
  button {
    color: #1b1b1b;
    font-size: 1rem;
  }
  .left-wrapper {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    width: 50%;
    background: #1b1b1b;
    h2 {
      width: 80%;
    }
    img {
      padding-top: 10%;
      width: 80%;
    }
  }
  .right-wrapper {
    padding: 2rem 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      width: 80%;
    }
    form {
      display: block;
      width: 80%;
      margin: 2rem 0;
      .name-wrapper {
        input {
          width: 50%;
        }
      }
      .email-wrapper {
        input {
          width: 80%;
        }
      }
      .message-wrapper {
        display: flex;
        flex-direction: column;
        textarea {
          width: 80%;
          margin: 1.5rem 0;
          font-family: "Inter", sans-serif;
          font-size: 2rem;
        }
      }
    }
  }

  @media (max-width: 1500px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    .left-wrapper {
      display: none;
    }
    .right-wrapper {
      width: 90%;
      .message-wrapper {
        width: 100%;
        textarea {
          width: 100%;
        }
      }
    }
  }
`;

export default ContactUs;
