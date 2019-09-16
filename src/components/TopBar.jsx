import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="leftBarContent">
        <i className="fas fa-bars hamburgerIcon" />
        <span>Prasham's Portfolio</span>
      </div>
      <div className="centeredBarContent">Sep 7 09:19</div>
      <div className="rightBarContent">Icons come here</div>
    </div>
  );
}
