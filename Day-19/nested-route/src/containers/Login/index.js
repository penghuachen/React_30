import React, { Component } from "react";
import "./index.css";
export default class Login extends Component {
  render() {
    // console.log(this.props);

    return (
      <div className="login-page">
        <h2>使用者登入畫面</h2>
        <label htmlFor="account">帳號:</label>
        <input type="text" id="account" />
        <br />
        <label htmlFor="password">密碼:</label>
        <input type="text" id="password" />
        <br />
        <button onClick={this.props.login}>登入</button>
      </div>
    );
  }
}
