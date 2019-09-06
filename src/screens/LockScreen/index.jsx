import React from "react";
import LockScreenClock from "./LockScreenClock";
import "./LockScreen.css";

export default function LockScreen() {
  return (
    <div className="LockScreen">
      <LockScreenClock />
      {/* <LockScreenNotifications notification= {[{header:"Notification1",body:"Body1",icon:"images/Icons1.jpg"}]}/> */}
    </div>
  );
}
