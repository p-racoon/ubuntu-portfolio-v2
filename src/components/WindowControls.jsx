import React from "react";
import { Link } from "react-router-dom";
import "./WindowControls.css";

export default function WindowControls(props) {
  return (
    <div className="WindowControls">
      <div
        className="WindowControlButton"
        onClick={props.handles.handleOnMinimize}
      >
        <img
          className="WindowControlIcon"
          src="/images/icons/system/window-minimize-symbolic.svg"
          alt={`minimize ${props.windowName}`}
        />
      </div>
      {/* <div className="WindowControlButton">
        <img
          className="WindowControlIcon"
          src="/images/icons/system/window-maximize-symbolic.svg"
          alt={`close ${props.windowName}`}
        />
      </div>
      <div className="WindowControlButton">
        <img
          className="WindowControlIcon"
          src="/images/icons/system/window-restore-symbolic.svg"
          alt={`restore ${props.windowName}`}
        />
      </div> */}
      <div className="WindowControlButton">
        <Link to="/desktop">
          <img
            className="WindowControlIcon"
            src="/images/icons/system/window-close-symbolic.svg"
            alt={`close ${props.windowName}`}
          />
        </Link>
      </div>
    </div>
  );
}
