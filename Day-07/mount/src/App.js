import React, { Component } from "react";
import "./styles.css";
import Card from "./Card";

class App extends Component {
  constructor() {
    console.log("[App.js]: constructor");
    super();
    this.state = {
      persons: [{ name: "Bill", age: 27, habbit: "Play ball" }]
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("----------------");
    console.log("[App.js]: getDerivedStateFromProps");
    console.log("props", props);
    console.log("state", state);
    console.log("----------------");
    return state;
  }

  componentDidMount() {
    console.log("[App.js]: componentDidMount");
  }
  render() {
    console.log("[App.js]: render");
    return (
      <div className="App">
        <h1>Component Mounting</h1>
        <p>open console</p>
        <Card persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
