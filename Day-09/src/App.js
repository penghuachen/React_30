import React, { Component } from "react";
import "./styles.css";

import Card from "./Components/Card";

export default class App extends Component {
  state = {
    person: {
      name: "Bill",
      age: 27,
      habbit: "Play ball"
    }
  };

  changePersonHandler = () => {
    this.setState({
      person: {
        name: "Henry",
        age: 15,
        habbit: "Read books"
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Card
          changePersonHandler={this.changePersonHandler}
          person={this.state.person}
        />
      </div>
    );
  }
}
