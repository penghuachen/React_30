import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.changeTextHandler}>
        {this.props.propsText}
      </div>
    );
  }
}

export default Card;
