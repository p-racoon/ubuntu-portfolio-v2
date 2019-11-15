import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import menuSymbol from './../images/icons/system/open-menu-symbolic.svg';
import shutDownSymbol from './../images/icons/system/system-shutdown-symbolic.svg';
import Clock from 'react-live-clock';

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="leftBarContent">
        <a className="hamburgerIcon">
          {/* <i className="fas fa-bars " /> */}
          <img src={menuSymbol} />
        </a>
        <span>Prasham's Portfolio </span>
        {/* <i class="fa fa-question-circle" aria-hidden="true"></i> */}
      </div>
      <div className="centeredBarContent">
        <Clock format={'MMM DD HH:mm'} ticking={true} />
      </div>
      <div className="rightBarContent">
        <a href="https://linkedin.com/in/prashesh09/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/p-racoon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://medium.com/@prasham9.ash" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium-m"></i>
        </a>
        <a href="https://twitter.com/Prasham09" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <Link to="/">
          <img src={shutDownSymbol}></img>
        </Link>
      </div>
    </div>
  );
}
