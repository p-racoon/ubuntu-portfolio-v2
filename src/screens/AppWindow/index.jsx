import React from "react";
import "./index.css";

export default function AppWindow() {
  return (
    <div className="appWindow">
      <div className="windowSideBar">
        <div className="windowTopBar">windowTopBar</div>
        <div className="windowSideOption">windowSideOption</div>
        <div className="windowSideOption">windowSideOption</div>
      </div>
      <div className="mainWindow">
        <div className="windowTopBar">windowTopBar</div>
        <div className="mainWindow">mainWindow</div>
      </div>
    </div>
  );
}
