import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const parsingQueryParams = (paramsString) => {
  // 重點觀察位置
  const searchParams = new URLSearchParams(paramsString);
  for (let p of searchParams) {
    return p;
  }
};

const Item = (props) => {
  const [param, value] = parsingQueryParams(props.location.search);
  return (
    <div className="query-container">
      Query 的參數為: {param}，值為 {value}
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Query 參數</h1>
          <nav>
            <Link
              // 重點觀察位置
              to={{
                pathname: "/item",
                search: "?page=1"
              }}
            >
              模擬切換至 page 1
            </Link>
            <Link
              to={{
                pathname: "/item",
                search: "?page=2"
              }}
            >
              模擬切換至 page 2
            </Link>
          </nav>
          <Route path="/Item" component={Item} />
        </div>
      </Router>
    );
  }
}
