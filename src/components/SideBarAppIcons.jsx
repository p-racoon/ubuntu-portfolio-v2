import React from "react";
import "./SideBarAppIcons.css";

export default function SideBarAppIcons(props) {
  return (
    <div className="appIconContainer tooltip">
      <img
        className="appIcon"
        src={props.iconDetail.src}
        alt={props.iconDetail.altText}
      />
      <span className="right">{props.iconDetail.altText}</span>
    </div>
  );
}
