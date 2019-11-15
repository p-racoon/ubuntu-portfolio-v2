import React from 'react';
import './About.css';
import profilePic from './../images/prasham.jpeg';
import Typist from 'react-typist';

export default function About() {
  return (
    <div className="AboutBody">
      <div className="ProfilePic ">
        <img className="tint" src={profilePic} alt="Prasham's Face" />
      </div>
      <Typist
        avgTypingDelay={50}
        cursor={{
          show: true,
          blink: true,
          element: '_',
          hideWhenDone: true,
          hideWhenDoneDelay: 500,
        }}
      >
        <h1 className="whoami">whoami?</h1>
        <Typist.Backspace count={7} delay={500} />
        <h2>I am Prasham Ashesh</h2>
        <h3>Front-end Engineer, focused on creating beautiful User Experiences.</h3>
        <h3>
          Currently undergoing{' '}
          <a href="https://www.pesto.tech/" target="_blank" rel="noopener noreferrer">
            Pesto Tech's Career Accelerator Program.
          </a>
        </h3>
        <h3>Available for Full-time Remote opportunities in web development.</h3>
        <h3>
          View my full resume{' '}
          <a href="http://bit.ly/PrashamPestoResume" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </h3>
      </Typist>
    </div>
  );
}
