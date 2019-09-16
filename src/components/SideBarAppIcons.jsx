import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBarAppIcons.css";

export default function SideBarAppIcons(props) {
  return (
    <NavLink
      className="appIconContainer"
      to={`/desktop/${props.iconDetail.name}`}
      activeClassName="selectedNav"
    >
      <div className=" tooltip">
        <img
          className="appIcon"
          src={props.iconDetail.src}
          alt={props.iconDetail.altText}
        />
        <span className="right">{props.iconDetail.altText}</span>
      </div>
    </NavLink>
  );
}
