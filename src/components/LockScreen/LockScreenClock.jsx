import React from "react";
import "./LockScreenClock.css";

export default function LockScreenClock() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const systemTime = new Date();
  const currentTime = {
    year: systemTime.getFullYear(),
    monthName: months[systemTime.getMonth()],
    month: String(systemTime.getMonth() + 1).padStart(2, "0"),
    date: String(systemTime.getDate()).padStart(2, "0"),
    day: days[systemTime.getDay()],
    hour: String(systemTime.getHours()).padStart(2, "0"),
    minute: String(systemTime.getMinutes()).padStart(2, "0")
  };
  const formattedTime = `${currentTime.hour}:${currentTime.minute}`; //22:44
  const formattedDate = `${currentTime.day}, ${currentTime.monthName} ${currentTime.date}`; //Sunday, September 01
  const ariaDate = `${currentTime.year}-${currentTime.month}-${currentTime.date}`; //2013-11-30
  return (
    <div className="LockScreenClock">
      <time className="LockScreenTime" dateTime={`T${formattedTime}`}>
        {formattedTime}
      </time>
      <br />
      <time className="LockScreenDate" dateTime={ariaDate}>
        {formattedDate}
      </time>
    </div>
  );
}
