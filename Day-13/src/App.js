import React from "react";
import "./styles.css";
import BaseButton from "./components/BaseButton/";
// 請注意 WithButtonBgAndColor 和 withButtonBgAndColor 的差異
// 回傳一個元件
import WithButtonBgAndColor from "./HOC/WithButtonBgAndColor";
// 是一個函式
import withButtonBgAndColor from "./HOC/withButtonBgAndColor";

import withDynamicButtonBgAndColor from "./HOC/withDynamicButtonBgAndColor";
import AnotherBaseButton from "./components/AnotherBaseButton";

const AnotherButtonBgAndColor = withButtonBgAndColor(BaseButton);

// 透過 props 不同的值來取得被包裝後的元件
const YellowBgAndBlackColor = withDynamicButtonBgAndColor(
  AnotherBaseButton,
  "yellow-bg-and-black-color"
);

const RedBgAndWhiteColor = withDynamicButtonBgAndColor(
  AnotherBaseButton,
  "red-bg-and-white-color"
);

export default function App() {
  return (
    <div className="App">
      <h2>基本的 Button</h2>
      <BaseButton />
      <h2>HOC - 直接包裝後回傳一個被包裝後的 Button</h2>
      <WithButtonBgAndColor />
      <h2>HOC - 呼叫函式後回傳一個被包裝後的 Button</h2>
      <AnotherButtonBgAndColor />
      <hr />
      <h2>HOC - 傳入不同的值動態修改 Button 的樣式</h2>
      <RedBgAndWhiteColor />
      <YellowBgAndBlackColor />
    </div>
  );
}
