import React from "react";

export default function LockScreenNotifications(props) {
  return (
    <ol>
      {props.notifications.map(notification => {
        return (
          <li>
            <div className="lockScreenNotification">
              <h1>{notification.head}</h1>
              <p>{notification.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
