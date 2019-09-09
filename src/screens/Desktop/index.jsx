import React from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import "./index.css";

export default function Desktop() {
  return (
    <div className="fullDesktop">
      <TopBar />
      <div className="mainDesktop">
        <SideBar />
        {/* <MainDesktop /> */}
      </div>
    </div>
  );
}
