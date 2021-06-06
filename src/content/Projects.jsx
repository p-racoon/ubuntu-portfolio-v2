import React from 'react';
import './Projects.css';
import ListGroup from '../components/ListGroup';
import phpIcon from './../images/icons/php.png';
import reactIcon from './../images/icons/react.png';
import jsIcon from './../images/icons/js.png';
import { DiPython, DiJavascript1, DiReact, DiMysql, DiLaravel, DiBootstrap } from 'react-icons/di';
import { FaPhp, FaAws, FaDocker } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function Projects() {
  return (
    <div className="WebExpBody">
      <h1>Projects</h1>
      <IconContext.Provider value={{ color: 'green', size: '25px' }}>
        <ListGroup>
          <div className="ExpCard">
            <div className="ExpImage">
              <img src="https://logo.clearbit.com/allbound.com" alt="Allbound Logo" />
            </div>
            <div className="ExpContent">
              <h2>
                Allbound PRM Software <DiReact />
                <DiLaravel />
                <DiMysql />
                <FaDocker />
                {/* <img src="https://logo.clearbit.com/looker.com" className="techbadge" alt="Looker Logo" /> */}
              </h2>
              <p>
                Allbound is a Saas company with HQ in Phoenix, AZ, USA. It’s SaaS partner sales
                acceleration platform for Partner Relationship Management, allows companies to
                manage and successfully run their Partner Channel programs across the globe.
              </p>
              <h3>Business</h3>
              <p>
                ● Tasked with building addiction into the platform, CI usage alone was up by ~1400%
                and our North Star metric was up by >100%.
                <br />● Channel Insights’ Feature Owner, Core Looker Developer. <br />● Backed by
                Channel Insights and other Front-end Enhancements to the product, Allbound’s ARR
                doubled, and for the first time reached a break-even point.
                <br />
              </p>
              <h3>Technical</h3>
              <p>
                ● Worked on key features like Partner Journey Automation, Prospect Pages, Markdown
                Editor, PJA Webhooks and several other UI components.
                <br />
                ● Actively contributed to the decision-making and implementation of UI in React.
                <br />
              </p>
            </div>
          </div>
          <div className="ExpCard">
            <div className="ExpImage">
              <img src="https://logo.clearbit.com/infosys.com" alt="Infosys Logo" />
            </div>
            <div className="ExpContent">
              <h2>
                e-Commerce Modernization <DiReact />
                <DiJavascript1 />
                <FaAws />
              </h2>
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
              <img src="https://logo.clearbit.com/aws.amazon.com" alt="AWS Logo" />
            </div>
            <div className="ExpContent">
              <h2>
                AWS Boundless Experience <DiBootstrap />
                <FaPhp size={32} />
                <DiPython />
                <DiMysql />
              </h2>
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
                ● Developed Cart and Inventory management Application, to be shown in NRF expo,
                within a short notice of 4 weeks. <br />
                ● Coordinated with the Data Science team and advised them to use a scripting
                language for easier on-spot debugging. <br />
                ● Deployed and developed the whole Backend and Database,using PHP and MySQL.
                <br />
              </p>
            </div>
          </div>
          {/* Balani Infotech */}
          {/* <div className="ExpCard">
            <div className="ExpImage">
              <img src="http://logo.clearbit.com/balaniinfotech.com" alt="Balani Logo" />
            </div>
            <div className="ExpContent">
              <h2>
                Balani Infotech Pvt. Ltd. <DiMaterializecss />
                <DiJavascript1 />
                <FaPhp />
                <DiMysql />
              </h2>
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
                ● Designed and developed a fully customized application for them, which improved
                their web presence. <br />
                ● Implemented custom analytics which they used to track the popularity of their
                products. <br />
                <br />
              </p>
            </div>
          </div> */}
        </ListGroup>
      </IconContext.Provider>
    </div>
  );
}
