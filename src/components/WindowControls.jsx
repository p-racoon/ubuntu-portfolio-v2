import React from "react";
import { Link } from "react-router-dom";
import "./WindowControls.css";
import windowMinimizeIcon from "./../images/icons/system/window-minimize-symbolic.svg"
import windowMaximizeIcon from "./../images/icons/system/window-maximize-symbolic.svg"
import windowRestoreIcon from "./../images/icons/system/window-restore-symbolic.svg"
import windowCloseIcon from "./../images/icons/system/window-close-symbolic.svg"

export default function WindowControls(props) {
  return (
    <div className="WindowControls">
      <div
        className="WindowControlButton"
        onClick={props.handles.handleOnMinimize}
      >
        <img
          className="WindowControlIcon"
          src={windowMinimizeIcon}
          alt={`minimize ${props.windowName}`}
        />
      </div>
      {/* <div className="WindowControlButton">
        <img
          className="WindowControlIcon"
          src={windowMaximizeIcon}
          alt={`close ${props.windowName}`}
        />
      </div>
      <div className="WindowControlButton">
        <img
          className="WindowControlIcon"
          src={windowRestoreIcon}
          alt={`restore ${props.windowName}`}
        />
      </div> */}
      <div className="WindowControlButton">
        <Link to="/desktop">
          <img
            className="WindowControlIcon"
            src={windowCloseIcon}
            alt={`close ${props.windowName}`}
          />
        </Link>
      </div>
    </div>
  );
}
