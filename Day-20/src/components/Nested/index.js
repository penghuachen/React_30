import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
export default class Nested extends Component {
  render() {
    // console.log(this.props);

    return (
      <div>
        <h1>Nested Component</h1>
        <nav>
          <NavLink to={this.props.match.url + "/cmp-1"}>cmp-1</NavLink>
          <NavLink to={this.props.match.url + "/cmp-2"}>cmp-2</NavLink>
        </nav>
        <Switch>
          {/* 重點觀察位置 */}
          {this.props.routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={this.props.match.url + route.path}
                render={(props) => {
                  // console.log(this.props.match.url + route.path);
                  return <route.component {...props} />;
                }}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}
