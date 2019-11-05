import React from 'react';
import './Projects.css';
import ListGroup from '../components/ListGroup';
import phpIcon from './../images/icons/php.png';
import reactIcon from './../images/icons/react.png';
import jsIcon from './../images/icons/js.png';

export default function Projects() {
  return (
    <div className="WebExpBody">
      <h1>Projects</h1>
      <ListGroup>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={reactIcon} alt="React Logo" />
          </div>
          <div className="ExpContent">
            <h2>e-Commerce Modernization</h2>
            <p>
              This project aimed at creating a modular and pluggable e-Commerce website or quick
              integration with other applications.
              <br />
              The project was structured in a way that each component and microservice operated
              independant of each other. <br />
            </p>
            <h3>Business</h3>
            <p>
              ● The checkout module is being used by GAP and Macys.
              <br />
              ● The login module is being used by HIL for their internal project.
              <br />
            </p>
            <h3>Technical</h3>
            <p>
              ● Created Filter functionality and whole Cart and Checkout components and modules.
              <br />
              ● Reworked the whole application, with all functional components and hooks.
              <br />
            </p>
          </div>
        </div>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={phpIcon} alt="PHP Logo" />
          </div>
          <div className="ExpContent">
            <h2>AWS Boundless Experience</h2>
            <p>
              This project aimed at creating{' '}
              <a
                href="https://www.amazon.com/b?ie=UTF8&node=16008589011"
                target="_blank"
                rel="noopener noreferrer"
              >
                'AWS Go'
              </a>{' '}
              like Shopping Experience.
              <br />
              Our task was to create the shopping interface and logic. <br />
              To keep track of Shoppers' cart, Shop's Inventory and Generate stats. <br />
            </p>
            <h3>Business</h3>
            <p>
              ● The Project was showcased in{' '}
              <a
                href="https://en.wikipedia.org/wiki/Retail%27s_BIG_Show"
                target="_blank"
                rel="noopener noreferrer"
              >
                Retail's BIG Show 2019 by NRF
              </a>
              .
              <br />
            </p>
            <h3>Technical</h3>
            <p>
              ● Developed Cart and Inventory management Application, to be shown in NRF expo, within
              a short notice of 4 weeks. <br />
              ● Coordinated with the Data Science team and advised them to use a scripting language
              for easier on-spot debugging. <br />
              ● Deployed and developed the whole Backend and Database,using PHP and MySQL.
              <br />
            </p>
          </div>
        </div>
      </ListGroup>
      <br />
      <ListGroup>
        <div className="ExpCard">
          <div className="ExpImage">
            <img src={reactIcon} alt="React Logo" />
          </div>
          <div className="ExpContent">
            <h2>Balani Infotech Pvt. Ltd.</h2>
            <p>
              Built Business Website for <a href="http://balaniinfotech.com">Balani Infotech</a>{' '}
              which is one of the leading information solutions providers in the indian
              subcontinent, and provide a range of education related solutions.
            </p>
            <h3>Business</h3>
            <p>
              ● Created their social and business accounts and got them started with digital
              marketing.
              <br />
              ● They saw a 30% jump in customer queries, because of the improved outreach.
              <br />
            </p>
            <h3>Technical</h3>
            <p>
              ● Setup their website on GoDaddy, registered and configured their domain name.
              <br />
              ● Designed and developed a fully customized application for them, which improved their
              web presence. <br />
              ● Implemented custom analytics which they used to track the popularity of their
              products. <br />
              <br />
            </p>
          </div>
        </div>
      </ListGroup>
    </div>
  );
}
