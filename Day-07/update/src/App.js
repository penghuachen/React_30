import React, { Component } from "react";
import "./styles.css";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [{ name: "Bill", age: 27, habbit: "Play ball" }]
    };
  }

  changeNameHandler = () => {
    this.setState((state) => {
      const arr = state.persons;
      arr[0].name = "Henry";
      return {
        persons: arr
      };
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("----------------");
    console.log("[App.js]: getDerivedStateFromProps");
    console.log("props", props);
    console.log("state", state);
    console.log("----------------");
    return state;
  }

  shouldComponentUpdate() {
    console.log("[App.js]: shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log("----------------");
    console.log("[App.js]: getSnapshotBeforeUpdate");
    console.log("props", props);
    console.log("state", state);
    console.log("----------------");
    return null;
  }

  componentDidUpdate() {
    console.log("[App.js]: componentDidUpdate");
  }

  render() {
    console.log("[App.js]: render");
    return (
      <div className="App">
        <h1>Component Updating</h1>
        <p>open console</p>
        <Card
          persons={this.state.persons}
          changeNameHandler={this.changeNameHandler}
        />
      </div>
    );
  }
}

export default App;
