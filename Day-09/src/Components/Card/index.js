import React, { Component } from "react";
import "./index.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.changePersonHandler}>
        <h1>{this.props.person.name}</h1>
        <p>{this.props.person.age}</p>
        <p>{this.props.person.habbit}</p>
      </div>
    );
  }
}
