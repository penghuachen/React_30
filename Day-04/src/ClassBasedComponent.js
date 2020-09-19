import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}

export default Welcome;
