import React, { useRef } from "react";
import "./styles.css";
import BaseInput from "./components/BaseInput";

export default function App() {
  const inputRef = useRef(null);
  const foucsBaseInput = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h1 onClick={foucsBaseInput}>useImperativeHandel Demo: 請點擊這段文字</h1>
      <BaseInput ref={inputRef} />
    </div>
  );
}
