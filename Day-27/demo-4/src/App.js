import React, { useState } from "react";
import "./styles.css";
import Card4 from "./components/Card4";
import Context from "./components/Context";
const App = () => {
  const [state, setTextState] = useState({
    propsText: "Initial value",
    contextText: "Initial value",
    contextTextInFuncComponent: "Initial value",
    contextTextInFuncComponentByUseContext: "Initial value"
  });

  const changeTextByUseContextInFuncComponent = () => {
    setTextState({
      ...state,
      contextTextInFuncComponentByUseContext:
        "change text by useContext in function component"
    });
  };

  return (
    <div className="App">
      <h2>透過 React hook: useContext 提供 Context 物件的值到 card 元件中</h2>
      <Context.Provider
        value={{
          ...state,
          changeTextByUseContextInFuncComponent
        }}
      >
        <Card4 />
      </Context.Provider>
    </div>
  );
};

export default App;
