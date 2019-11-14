import React from 'react';
import Clock from 'react-live-clock';
import './LockScreenClock.css';

export default function LockScreenClock() {
  return (
    <div className="LockScreenClock">
      <Clock className="LockScreenTime" format={'HH:mm'} ticking={true} />
      <br />
      <Clock className="LockScreenDate" format={'dddd, MMMM DD'} ticking={true} />
    </div>
  );
}
