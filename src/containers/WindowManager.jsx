import React from "react";
import AppWindow from "../screens/AppWindow";
import About from "../content/About";
import WebExp from "../content/WebExp";
import Contact from "../content/Contact";
import Help from "../content/Help";

export default function WindowManager(props) {
  const activeWindow = props.activeWindow || "Help";
  const appWindows = {
    About: {
      name: "About Me",
      content: <About />
    },
    // WebExperience: {
    //   name: "Web Dev Experience",
    //   content: <WebExp />
    // },
    ContactMe: {
      name: "Contact Me",
      content: <Contact />
    },
    TechnicalSkills: {
      name: "Technical Skills",
      content: <WebExp />
    },
    Help: {
      name: "Help",
      content: <Help />
    }
  };
  const content = appWindows[activeWindow];
  //   const AppWindowObj = <AppWindow content={appWindows[activeWindow]} />;
  return (
    <div>
      <AppWindow {...props} content={content} />
    </div>
  );
}
