import React, { useState } from 'react';
import './About.css';
import profilePic from './../images/prasham.jpeg';
import Typist from 'react-typist';

export default function About() {
  const [fullTextShown, setFullTextShown] = useState(false);
  const content = (
    <div className="AboutMeContent">
      <h2>I am Prasham Ashesh</h2>
      <h3>Front-end Engineer, focused on creating beautiful User Experiences.</h3>
      <h3>
        Currently working full-time for{' '}
        <a href="https://www.allbound.com/" target="_blank" rel="noopener noreferrer">
          Allbound Inc.
        </a>
      </h3>
      <h3>Now, open for opportunities in web development.</h3>
      <h3>
        View my resume{' '}
        <a
          href="http://url.inbrief.xyz/PrashamLatestResume"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </h3>
    </div>
  );
  return (
    <div className="AboutBody" onClick={() => setFullTextShown(true)}>
      <div className="ProfilePic ">
        <img className="tint" src={profilePic} alt="Prasham Ashesh's Profile pic" />
      </div>
      {fullTextShown ? content : (
        <Typist
          avgTypingDelay={25}
          cursor={{
            show: true,
            blink: true,
            element: '_',
            hideWhenDone: true,
            hideWhenDoneDelay: 500,
          }}
          onTypingDone={() => setFullTextShown(true)}
        >
          <h1 className="whoami">whoami?</h1>
          <Typist.Backspace count={7} delay={1000} />
          {content}
        </Typist>
      )}
    </div>
  );
}
