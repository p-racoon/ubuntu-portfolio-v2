import React from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import "./index.css";
// import AppWindow from "../AppWindow";
import WindowManager from "../../containers/WindowManager";

export default function Desktop(props) {
  return (
    <div className="fullDesktop">
      <TopBar />
      <div className="mainDesktop">
        <SideBar />
        {props.match.params.activeWindow ? (
          <WindowManager {...props} activeWindow={props.match.params.activeWindow} />
        ) : null}
        {/* <AppWindow /> */}
        {/* <MainDesktop /> */}
      </div>
    </div>
  );
}
