import React, { useState } from "react";
import "./styles.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Context from "./components/Context";
const App = () => {
  const [state, setTextState] = useState({
    propsText: "Initial value",
    contextText: "Initial value",
    contextTextInFuncComponent: "Initial value",
    contextTextInFuncComponentByUseContext: "Initial value"
  });

  const changeTextHandler = () => {
    setTextState({
      ...state,
      propsText: "change text by props data"
    });
  };

  const changeTextByContextAPI = () => {
    setTextState({
      ...state,
      contextText: "change text by Context Provider/Consumer"
    });
  };

  const changeTextByContextAPIInFuncComponent = () => {
    setTextState({
      ...state,
      contextTextInFuncComponent:
        "change text by Context Provider/Consumer in function component"
    });
  };

  return (
    <div className="App">
      <h2>props data 到 card 元件中</h2>
      <Card propsText={state.propsText} changeTextHandler={changeTextHandler} />
      <h2>透過 Context.Provider 提供 Context 物件的值到 card 元件中</h2>
      <p>此為 Class-based component</p>
      <Context.Provider
        value={{
          ...state,
          changeTextByContextAPI
        }}
      >
        <Card2 />
      </Context.Provider>
      <h2>透過 Context.Provider 提供 Context 物件的值到 card 元件中</h2>
      <p>此為 Function component</p>
      <Context.Provider
        value={{
          ...state,
          changeTextByContextAPIInFuncComponent
        }}
      >
        <Card3 />
      </Context.Provider>
    </div>
  );
};

export default App;
