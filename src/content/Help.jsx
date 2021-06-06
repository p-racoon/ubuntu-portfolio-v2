import React from 'react';
import './Help.css';

export default function Help() {
  return (
    <div className="HelpBody">
      <h3>
        Created this portfolio as Personal Portfolio to showcase my skills as a Web Developer.
        <br />
        <br />
        Reason for choosing ubuntu's design?
        <br />
        <br />
        I prepared this in Pesto Tech's 1st month's curriculum, and have been working on it since
        then.
        <br />
        <br />
      </h3>
      <span className="text-muted">
        <br />
        Use the Left Sidebar to navigate through different pages.
        <br />
        <br />
        Hint: Press F11 to view it in full screen.
        <br />
        <br />
        Upcoming Features [WIP]: <br />
        1. Window Drag and drop
        <br />
        2. Desktop Icons <br />
        3. Window resize <br />
      </span>
    </div>
  );
}
