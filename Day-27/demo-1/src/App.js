import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("初始文字");

  const test = () => {
    setText("有發現我不一樣了嗎?");
  };

  useEffect(() => {
    document.querySelector("h2").addEventListener("mouseenter", test);
    return () => {
      document.querySelector("h2").removeEventListener("mouseenter", test);
    };
  }, [text]);

  return (
    <div className="App">
      <h2>function component 範例: 請將滑鼠移到這個標題上，觀察變化</h2>
      <p>{text}</p>
    </div>
  );
}
