import React from "react";
import "./styles.css";
import PageA from "./containers/PageA";
import PageB from "./containers/PageB";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <h2>使用 Link</h2>
        <nav>
          <ul>
            <li>
              <Link to="/PageA">PageA</Link>
            </li>
            <li>
              <Link to="/PageB">PageB</Link>
              <Redirect to="/" />
            </li>
          </ul>
        </nav>
        <h2>使用 NavLink</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/PageA" activeClassName="active">
                PageA
              </NavLink>
            </li>
            <li>
              <NavLink to="/PageB" activeClassName="active">
                PageB
              </NavLink>
              <Redirect to="/PageA" />
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/PageA">
            <PageA />
          </Route>
          <Route path="/PageB">
            <PageB />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
