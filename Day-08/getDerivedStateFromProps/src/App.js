import React, { Component } from "react";
import "./styles.css";

import SubComponent from "./SubComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isTrue: true
    };
  }

  changeRadioHandler = (e) => {
    const value = e.target.value;
    const checkTrue = value === "true" ? true : false;
    this.setState((state) => {
      return {
        isTrue: checkTrue
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>getDerivedStateFromProps 方法測試</h1>
        <SubComponent
          changeRadioHandler={this.changeRadioHandler}
          isTrue={this.state.isTrue}
        />
        <br />
        True:
        <input
          onChange={(e) => this.changeRadioHandler(e)}
          checked={this.state.isTrue}
          type="radio"
          name="main"
          value="true"
        />
        False:
        <input
          onChange={(e) => this.changeRadioHandler(e)}
          checked={!this.state.isTrue}
          type="radio"
          name="main"
          value="false"
        />
      </div>
    );
  }
}

export default App;
