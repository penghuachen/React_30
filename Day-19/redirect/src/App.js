import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import PageA from "./containers/PageA";
import PageB from "./containers/PageB";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>重導向</h1>
        <nav>
          <NavLink activeClassName="link" to="/PageA">
            Link-A
          </NavLink>
          <NavLink activeClassName="link" to="/PageB">
            Link-B
          </NavLink>
        </nav>
        <Switch>
          <Route path="/pageA" component={PageA} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </div>
    </Router>
  );
}
