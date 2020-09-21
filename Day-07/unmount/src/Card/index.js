import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  constructor() {
    super();
  }

  static getDerivedStateFromProps(props, state) {
    console.log("----------------");
    console.log("[Card.js]: getDerivedStateFromProps");
    console.log("props", props);
    console.log("state", state);
    console.log("----------------");
    return null;
  }

  shouldComponentUpdate() {
    console.log("[Card.js]: shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log("----------------");
    console.log("[Card.js]: getSnapshotBeforeUpdate");
    console.log("props", props);
    console.log("state", state);
    console.log("----------------");
    return null;
  }

  componentDidUpdate() {
    console.log("[Card.js]: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[Card.js]: componentWillUnmount");
  }

  render() {
    console.log("[Card.js]: render");

    return (
      <div className="card" onClick={this.props.changeNameHandler}>
        <h1>{this.props.persons[0].name}</h1>
        <p>{this.props.persons[0].age}</p>
        <p>{this.props.persons[0].habbit}</p>
      </div>
    );
  }
}

export default Card;
