import React from "react";
import "./index.css";
import Context from "../Context";

const Card3 = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <div
          className="card"
          onClick={context.changeTextByContextAPIInFuncComponent}
        >
          {context.contextTextInFuncComponent}
        </div>
      )}
    </Context.Consumer>
  );
};

export default Card3;
