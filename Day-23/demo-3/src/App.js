import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    number: 0
  };

  incrementHandler = () => {
    this.setState((state) => {
      return {
        number: state.number + 1
      };
    });
  };

  decrementHandler = () => {
    this.setState((state) => {
      return {
        number: state.number - 1
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h2>數字: {this.state.number}</h2>
        <button onClick={this.incrementHandler}>點擊 + 1</button>
        <button onClick={this.decrementHandler}>點擊 - 1</button>
      </div>
    );
  }
}
