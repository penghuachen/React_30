import React from "react";
import "./styles.css";

// components
import BasicUse from "./BasicUse.js";
import EmbeddedExpression from "./EmbeddedExpression.js";
import UseFunction from "./UseFunction.js";
import Conditional from "./Conditional.js";
import CreateElement from "./CreateElement.js";
import CreateElementOne from "./CreateElement-1.js";
import Test from "./Test.jsx";

export default function App() {
  return (
    <div className="App">
      <h3>使用 JSX 的基本方式</h3>
      <BasicUse />
      <hr />
      <h3>將變數傳入 JSX 語法中</h3>
      <EmbeddedExpression />
      <hr />
      <h3>在 JSX 中執行函式</h3>
      <UseFunction />
      <hr />
      <h3>在條件判斷回傳中使用 JSX</h3>
      <Conditional />
      <hr />
      <h3>使用 .jsx 為副檔名的 Component</h3>
      <Test />
      <hr />
      <h3>React.createElement()</h3>
      <CreateElement />
      <hr />
      <h3>React.createElement()</h3>
      <CreateElementOne />
    </div>
  );
}
