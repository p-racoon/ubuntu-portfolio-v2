import React from "react";
// import logo from './logo.svg';
import "./OS.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LockScreen from "./screens/LockScreen";
// import UserScreen from "./screens/UserScreen";
import Desktop from "./screens/Desktop";

function OS() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={LockScreen} /> */}
          <Route path="/" component={Desktop} />
          {/* <Route path="/desktop" component={Desktop} /> */}
          {/* <Route path="/user" component={UserScreen} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default OS;
