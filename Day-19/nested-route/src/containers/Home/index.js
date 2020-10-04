import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.props.loginFailed}>
          模擬切換頁面時，驗證失效
        </button>
      </div>
    );
  }
}
