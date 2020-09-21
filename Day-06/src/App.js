import React, { Component } from "react";
import "./styles.css";

import Person from "./Person.js";

class App extends Component {
  state = {
    person: [{ name: "init value" }]
  };

  changeNameHandler = (e, name, idx) => {
    this.setState(state => {
      const { person } = state;
      person[idx].name = name;
      return state;
    });
  };

  render() {
    const { person } = this.state;
    return (
      <div className="App">
        <h1>雙向綁定(Two way binding)</h1>
        <Person
          name={person[0].name}
          changeNameHandler={this.changeNameHandler}
        />
      </div>
    );
  }
}

export default App;
