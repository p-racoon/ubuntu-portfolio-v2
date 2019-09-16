import React from "react";
import "./SideBar.css";
import SideBarAppIcons from "./SideBarAppIcons";

export default function SideBar(props) {
  const appIcons = [
    {
      name: "About",
      altText: "About",
      src: "/images/icons/app/about.svg"
    },
    {
      name: "WebExperience",
      altText: "My Web Experience",
      src: "/images/icons/app/google-chrome.svg"
    },
    {
      name: "ContactMe",
      altText: "Contacts & Social Links",
      src: "/images/icons/app/mail-app.png"
    },
    {
      name: "TechnicalSkills",
      altText: "Technical Skills",
      src: "/images/icons/app/tools.png"
    },
    {
      name: "Help",
      altText: "Help",
      src: "/images/icons/app/help.png"
    }
  ];
  return (
    <div className="sideBar">
      {appIcons.map(iconDetail => (
        <SideBarAppIcons iconDetail={iconDetail} />
      ))}
      <div className = "lastAppIcon">
        <SideBarAppIcons
          iconDetail={{
            name: "Applications",
            altText: "My Projects",
            src: "/images/icons/app/view-app-grid-symbolic.svg"
          }}
        />
      </div>
    </div>
  );
}
