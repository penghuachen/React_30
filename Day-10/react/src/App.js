import React, { Component } from "react";
import "./styles.css";

const Test = (props) => {
  return <div>{props.isShow ? <p>I'm here!</p> : null}</div>;
};

export default class App extends Component {
  state = {
    isShow: true
  };

  render() {
    return (
      <div className="App">
        <h1>透過切換 isSHow 的布林值觀察變化。</h1>
        <Test isShow={this.state.isShow} />
      </div>
    );
  }
}
