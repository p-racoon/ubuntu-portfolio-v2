import React from "react";
import "./SideBarAppIcons.css";

export default function SideBarAppIcons(props) {
  return (
    <div className="appIconContainer">
      <img
        className="appIcon"
        src={props.iconDetail.src}
        alt={props.iconDetail.altText}
      />
    </div>
  );
}
