import React, { Component } from "react";
import "./styles.css";

const arr = [1, 2, 3, 4, 5];

const Elements = ({ arr }) => {
  return arr.map((num, index) => {
    return <li key={index}>這是數字: {num}。</li>;
  });
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>透過 map 渲染一個列表 List</h2>
        <ul>
          {[1, 2, 3, 4, 5].map((num, index) => {
            return <li key={index}>這是數字: {num}。</li>;
          })}
        </ul>
        <hr />
        <h2>另一種渲染列表的方式</h2>
        <ul>
          <Elements arr={arr} />
        </ul>
      </div>
    );
  }
}
