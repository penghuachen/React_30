import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  constructor() {
    super();
    console.log("[Card.js]: constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("----------------");
    console.log("[Card.js]: getDerivedStateFromProps");
    console.log("props", props);
    console.log("state", state);
    console.log("----------------");
    return null;
  }

  componentDidMount() {
    console.log("[Card.js]: componentDidMount");
  }

  render() {
    console.log("[Card.js]: render");
    return (
      <div className="card">
        <h1>{this.props.persons[0].name}</h1>
        <p>{this.props.persons[0].age}</p>
        <p>{this.props.persons[0].habbit}</p>
      </div>
    );
  }
}

export default Card;
