import React from 'react';
import './Contact.css';
import ListGroup from '../components/ListGroup';
import googleAccount from './../images/icons/app/goa-account-google.svg';
import facebookAccount from './../images/icons/app/goa-account-facebook.svg';

export default function Contact() {
  return (
    <div className="ContactBody">
      <h1>Contacts </h1>
      <div>
        <h4>Find me on</h4>
        <ListGroup>
          <a href="mailto:prasham9.ash@gmail.com" target="_blank" rel="noopener noreferrer">
            {/* <img src={googleAccount} />  */}
            <i class="fas fa-envelope-open-text"></i> Mail: <span>prasham9.ash@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/prashesh09/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i> Linkedin: linkedin.com/in/prashesh09/
          </a>
          <a href="https://github.com/p-racoon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github: github.com/p-racoon
          </a>
          <a href="https://medium.com/@prasham9.ash" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium-m"></i> Medium: https://medium.com/@prasham9.ash
          </a>
          <a href="https://twitter.com/Prasham09" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter : twitter.com/Prasham09
          </a>
        </ListGroup>
      </div>
    </div>
  );
}
