import React, { useState, useEffect } from "react";
import "./index.css";
import WindowControls from "../../components/WindowControls";

export default function AppWindow(props) {
  const [minified, setMinified] = useState(false);
  const [maximized, setMaximized] = useState(false);
  useEffect(() => {
    setMinified(false);
  }, [props.history.location]);
  const handleOnMaximize = e => {
    setMaximized(() => !maximized);
  };
  const handleOnMinimize = e => {
    setMinified(!minified);
  };
  const handleOnRestore = e => {};
  return (
    <div className={`appWindow ${minified ? "appWindowHidden" : null}`}>
      {/* <div className="windowSideBar">
        <div className="windowTopBar windowTopBarLeft">windowTopBar</div>
        <div className="windowSideOption">windowSideOption</div>
        <div className="windowSideOption">windowSideOption</div>
      </div> */}
      <div className="mainWindow">
        <div className="windowTopBar windowTopBarRight">
          <div></div>
          <div>{props.content.name}</div>
          <WindowControls
            handles={{
              handleOnMinimize,
              handleOnMaximize,
              handleOnRestore
            }}
          />
        </div>
        <div className="mainWindow">{props.content.content}</div>
      </div>
    </div>
  );
}
