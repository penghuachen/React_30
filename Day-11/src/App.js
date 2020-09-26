import React from "react";
import "./styles.css";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import ExampleFour from "./components/ExampleFour";
import ExampleFive from "./components/ExampleFive";

export default function App() {
  return (
    <div className="App">
      <h2>基礎使用，元件: ExampleOne</h2>
      <ExampleOne />
      <hr />
      <h2>條件判斷渲染樣式，元件: ExampleTwo</h2>
      <ExampleTwo primary />
      <hr />
      <h2>擴展樣式，元件: ExampleThree</h2>
      <ExampleThree />
      <hr />
      <h2>Scss-like style，元件: ExampleFour</h2>
      <ExampleFour />
      <hr />
      <h2>animation，元件 : ExampleFive</h2>
      <ExampleFive />
      <hr />
    </div>
  );
}
