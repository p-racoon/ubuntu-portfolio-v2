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
      <div className="rightBarContent">Icons come here</div>
    </div>
  );
}
