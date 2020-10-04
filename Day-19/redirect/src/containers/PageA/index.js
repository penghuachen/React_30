import React, { Component } from "react";
import "./index.css";
import { Route, NavLink, Switch } from "react-router-dom";
import PageAComponent from "../../components/PageAComponent";
import PageAAnotherComponent from "../../components/PageAAnotherComponent";

class PageA extends Component {
  render() {
    
    // 觀察 route 中 match 物件的內容
    console.log(this.props.match);
    return (
      <>
        <h1>Page A Component</h1>
        <nav>
          <NavLink
            className="nonactive-link"
            activeClassName="nested-link"
            // 重點觀察位置
            to={this.props.match.url + "/PageAComponent"}
          >
            Nested Link - A Nested Component
          </NavLink>
          <NavLink
            className="nonactive-link"
            activeClassName="nested-link"
            // 重點觀察位置
            to={this.props.match.url + "/PageAAnotherComponent"}
          >
            Nested Link - A Another Nested Component
          </NavLink>
        </nav>
        <Switch>
          <Route
            // 重點觀察位置
            path={this.props.match.url + "/:cmp"}
            // 重點觀察位置
            render={(props) => {
              // console.log(props);
              // 以目前需求簡化成如下判斷式
              if (props.location.pathname === "/PageA/PageAAnotherComponent") {
                return <PageAAnotherComponent />;
              } else {
                return <PageAComponent />;
              }
            }}
          />
        </Switch>
      </>
    );
  }
}

export default PageA;
