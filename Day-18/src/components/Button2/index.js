import React, { Component } from "react";
import "./index.css";
import { Route } from "react-router-dom";

class Button2 extends Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <button className="btn" onClick={() => history.push("/pageA/4")}>
            PageA, id: 4
          </button>
        )}
      />
    );
  }
}

export default Button2;
