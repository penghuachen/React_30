import React from "react";
import "./styles.css";
import PageA from "./containers/PageA";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <h2>使用 NavLink</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/PageA/1" activeClassName="active">
                PageA, id: 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/PageA/2" activeClassName="active">
                PageA, id: 2
              </NavLink>
              <Redirect to="/PageA/1" />
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/PageA/:id" component={PageA} />
        </Switch>
        <h2>使用 HOC 元件: withRouter</h2>
        <nav>
          <ul>
            <li>
              <Button />
            </li>
          </ul>
        </nav>
        <h2>使用 Route: render 方法</h2>
        <nav>
          <ul>
            <li>
              <Button2 />
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}
