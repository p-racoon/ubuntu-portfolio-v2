import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="ContactBody">
      <h4>
        Mail Id <br />
        <a href="mailto:prasham9.ash@gmail.com" target="_blank">
          prasham9.ash@gmail.com
        </a>
      </h4>
      <h4>
        Linkedin:{" "}
        <a href="https://linkedin.com/in/prashesh09/" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </h4>
      <h4>
        Github:{" "}
        <a href="https://github.com/p-racoon" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </h4>
      <h4>
        Medium:{" "}
        <a href="https://medium.com/@prasham9.ash" target="_blank">
          <i className="fab fa-medium-m"></i>
        </a>
      </h4>
      <h4>
        Twitter :{" "}
        <a href="https://twitter.com/Prasham09" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </h4>
    </div>
  );
}
