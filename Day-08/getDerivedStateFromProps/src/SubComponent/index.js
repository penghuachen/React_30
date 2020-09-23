import React, { Component } from "react";
import "./index.css";

class SubComponent extends Component {
  constructor() {
    super();
    this.state = {
      isTrue: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);

    if (props.isTrue !== state.isTrue) {
      return {
        isTrue: props.isTrue
      };
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="sub">
        <h1>Sub Component</h1>
        <br />
        True:
        <input
          onChange={(e) => this.props.changeRadioHandler(e)}
          checked={this.state.isTrue}
          type="radio"
          name="sub"
          value="true"
        />
        False:
        <input
          onChange={(e) => this.props.changeRadioHandler(e)}
          checked={!this.state.isTrue}
          type="radio"
          name="sub"
          value="false"
        />
      </div>
    );
  }
}

export default SubComponent;
