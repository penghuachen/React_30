import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const myRef = useRef(null);

  const focusInputByUseRef = () => {
    console.log(myRef);
    myRef.current.focus();
  };

  return (
    <div className="App">
      <h2 onClick={focusInputByUseRef}>
        functional Componet: useRef - 點擊本段文字
      </h2>
      <input ref={myRef} />
    </div>
  );
}
