import React from 'react';
import './WebExp.css';
import ListGroup from '../components/ListGroup';
import pestotechIcon from './../images/icons/pestotech.png';
import infosysIcon from './../images/icons/infosys.jpeg';
import freelancerIcon from './../images/icons/freelancer.png';
import jiitIcon from './../images/icons/jiit.png';

export default function WebExp() {
  return (
    <div className="WebExpBody">
      <h1>Experience</h1>
      <ListGroup>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={pestotechIcon} alt="AWS Logo" />
          </div>
          <div className="ExpContent">
            <h3>Pesto Tech</h3>
            <p>Aug,2019 - Present</p>
          </div>
        </div>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={infosysIcon} alt="AWS Logo" />
          </div>
          <div className="ExpContent">
            <h3>Infosys Pvt. Ltd.</h3>
            <p>Dec, 2017 - June,2019</p>
          </div>
        </div>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={freelancerIcon} alt="Freelancer Logo" />
          </div>
          <div className="ExpContent">
            <h3>Self-employed</h3>
            <p>Feb, 2016 - 17</p>
          </div>
        </div>
      </ListGroup>
      <h1>Education</h1>
      <ListGroup>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={jiitIcon} alt="AWS Logo" />
          </div>
          <div className="ExpContent">
            <h3>Jaypee Institute of Information Technology</h3>
            <p>2013-17</p>
          </div>
        </div>
      </ListGroup>
    </div>
  );
}
