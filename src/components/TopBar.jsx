import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="leftBarContent">
        <a className="hamburgerIcon">
          {/* <i className="fas fa-bars " /> */}
          <img src="/images/icons/system/open-menu-symbolic.svg" />
        </a>
        <span>Prasham's Portfolio</span>
      </div>
      <div className="centeredBarContent">Sep 7 09:19</div>
      <div className="rightBarContent">
        <a href="https://linkedin.com/in/prashesh09/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/p-racoon" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://medium.com/@prasham9.ash" target="_blank">
          <i class="fab fa-medium-m"></i>
        </a>
        <a href="https://twitter.com/Prasham09" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
