import React from 'react';
import './WebExp.css';
import ListGroup from '../components/ListGroup';
import awsIcon from './../images/icons/aws.png';
import udacityIcon from './../images/icons/udacity.png';
import phpIcon from './../images/icons/php.png';
import reactIcon from './../images/icons/react.png';
import jsIcon from './../images/icons/js.png';

export default function WebExp() {
  return (
    <div className="WebExpBody">
      <h1>Certificates</h1>
      <ListGroup>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={awsIcon} alt="AWS Logo" />
          </div>
          <div className="ExpContent">
            <h3>AWS Technical Professional</h3>
            <p>
              In this course I learnt about AWS products, services, and common solutions. I learnt
              the fundamentals of identifying AWS services, their purpose and how and when they can
              be used.
              <br />
              <br />
              <a
                href="https://confirm.udacity.com/FDH97H7L"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>{' '}
              (Issued Sep 2018)
            </p>
          </div>
        </div>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={udacityIcon} alt="Udacity Logo" />
          </div>
          <div className="ExpContent">
            <h3>Front-End Web Developer Nanodegree</h3>
            <p>
              Learnt in detail about the Frontend Ecosystem. Built several projects on the way.
              Focus was on Vanilla javascript.
              <br />
              <br />
              {/* <a
                href="https://confirm.udacity.com/FDH97H7L"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>{' '} */}
              (Issued Jan 2018)
            </p>
          </div>
        </div>
      </ListGroup>
      <h1>Skills & Languages</h1>
      <ListGroup>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={reactIcon} alt="React Logo" />
          </div>
          <div className="ExpContent">
            {/* <h4>React</h4> */}
            <p>
              Proficient with React, Have worked on React Hooks. Created the frontend for a Plug &
              Play e-commerce Website, at Infosys.
              <br />
              Experience: 8 months
            </p>
          </div>
        </div>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={jsIcon} alt="JS Logo" />
          </div>
          <div className="ExpContent">
            {/* <h4>React</h4> */}
            <p>
              Coming from Java, and C background I instantly fell in love with javascript. Working
              on frontend has been my favorite since then.
              <br />
              Experience: 3 years
            </p>
          </div>
        </div>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={phpIcon} alt="PHP Logo" />
          </div>
          <div className="ExpContent">
            {/* <h4>Php</h4> */}
            <p>
              Used PHP to create Shopping cart at Infosys for Client "AWS". Used it to Develop a
              website for a Freelancing Client.
              <br />
              Experience: 5 months
            </p>
          </div>
        </div>
      </ListGroup>
    </div>
  );
}
