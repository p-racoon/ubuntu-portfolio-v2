import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LockScreen from "./components/LockScreen";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LockScreen} />
          {/* <Route path="/desktop" component={Desktop} /> */}
          {/* <Route path="/desktop" component={UserScreen} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
