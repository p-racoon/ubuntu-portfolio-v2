import React from "react";
import "./WebExp.css";

export default function WebExp() {
  return (
    <div className="WebExpBody">
      <div className="ExpCard">
        <div className="ExpImage">
          <img src="/logo192.png" alt="React Logo" />
        </div>
        <div className="ExpContent">
          {/* <h4>React</h4> */}
          <p>
            Proficient with React, Have worked on React Hooks. Helped create an
            e-commerce Website, at Infosys.
            <br />
            Experience: 8 months
          </p>
        </div>
      </div>
      <div className="ExpCard">
        <div className="ExpImage">
          <img src="/images/icons/php.png" alt="React Logo" />
        </div>
        <div className="ExpContent">
          {/* <h4>Php</h4> */}
          <p>
            Used PHP to create Shopping cart at Infosys for Client "AWS". Used it to Develop a website for a Freelancing Client.
            <br />
            Experience: 5 months
          </p>
        </div>
      </div>
    </div>
  );
}
