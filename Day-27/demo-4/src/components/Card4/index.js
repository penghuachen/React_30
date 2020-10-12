import React, { useContext } from "react";
import "./index.css";
import Context from "../Context";

const Card4 = () => {
  const context = useContext(Context);
  return (
    <div
      className="card"
      onClick={context.changeTextByUseContextInFuncComponent}
    >
      {context.contextTextInFuncComponentByUseContext}
    </div>
  );
};

export default Card4;
