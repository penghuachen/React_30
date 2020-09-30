import React from "react";

const Context = React.createContext({
  text: "",
  changeTextByContextAPI: () => {},
  changeTextByContextAPIInFuncComponent: () => {},
  changeTextByUseContextInFuncComponent: () => {}
});

export default Context;
