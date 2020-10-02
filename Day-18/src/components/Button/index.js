import React, { Component } from "react";
import "./index.css";
import { withRouter } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <button
        className="btn"
        onClick={() => this.props.history.push("/pageA/3")}
      >
        PageA, id: 3
      </button>
    );
  }
}

export default withRouter(Button);
