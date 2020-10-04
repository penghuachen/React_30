import React, { Component } from "react";
import "./styles.css";
import { Route, Redirect, withRouter } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";

class App extends Component {
  state = {
    auth: false
  };

  login = () => {
    // 重要觀察位置
    this.setState({ auth: true }, () => {
      if (this.state.auth) {
        alert("模擬登入成功!!");
        this.props.history.push("/Home");
      }
    });
    // console.log(this.props);
  };

  loginFailed = () => {
    // 重要觀察位置
    this.setState({ auth: false }, () => {
      if (!this.state.auth) {
        alert("身份驗證失敗，回到登入畫面!!");
        this.props.history.push("/Login");
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>巢狀路由</h1>
        {/* 重要觀察位置 */}
        <Redirect to="/Login" />
        {this.state.auth ? (
          <Route
            to="/Home"
            render={(props) => (
              <Home loginFailed={this.loginFailed} {...props} />
            )}
          />
        ) : (
          <Route
            to="/Login"
            render={(props) => <Login login={this.login} {...props} />}
          />
        )}
      </div>
    );
  }
}
// 重要觀察位置
export default withRouter(App);
