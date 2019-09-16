import React from "react";
// import logo from './logo.svg';
import "./OS.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LockScreen from "./screens/LockScreen";
// import UserScreen from "./screens/UserScreen";
import Desktop from "./screens/Desktop";
import AppWindow from "./screens/AppWindow";

function OS() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/temp" component={AppWindow} />
          <Route exact path="/" component={LockScreen} />l
          <Route path="/temp" component={AppWindow} />
          {/* <Route  component={Desktop} /> */}
          <Route
            path="/desktop/:activeWindow"
            render={routeProps => <Desktop {...routeProps} />}
          />
          <Route path="/desktop" component={Desktop} />
          {/* <Route path="/user" component={UserScreen} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default OS;
