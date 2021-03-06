import React from 'react';
// import { Link } from "react-router-dom";
import LockScreenClock from './LockScreenClock';
import './LockScreen.css';

export default function LockScreen(props) {
  return (
    <div className="LockScreen" onClick={() => props.history.replace('/desktop/About')}>
      <LockScreenClock />
      <br />
      <i className="LockscreenCallToClick blinking">Click to continue</i>
      {/* <LockScreenNotifications notification= {[{header:"Notification1",body:"Body1",icon:"images/Icons1.jpg"}]}/> */}
    </div>
  );
}
