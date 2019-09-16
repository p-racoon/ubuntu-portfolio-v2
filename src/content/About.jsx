import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="AboutBody">
      <div className="ProfilePic">
        <img className="" src="/images/prasham.jpeg" alt="Prasham's Face" />
      </div>
      <p>
        Hi <br />
        I am Prasham Ashesh
        {/* <br />
        <br />
        Front-end Developer */}
        <br />
        <br />
        Currently undergoing{" "}
        <a href="https://www.pesto.tech/" target="_blank">
          Pesto Tech's Career Accelerator Program
          <br />
        </a>
        <br />
        Aim to become a Full Stack Product Engineer
        <br />
        <br />
        <br />
        <a href="/desktop/ContactMe">Contact Me</a>
        <br />
        View my full resume{" "}
        <a href="http://bit.ly/PrashamCv" target="_blank">
          Here
        </a>
      </p>
    </div>
  );
}
