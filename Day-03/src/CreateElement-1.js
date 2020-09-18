import React from "react";

const CreateElementOne = () => {
  const element = React.createElement("p", null, "這是一個子節點");
  const element2 = React.createElement(
    "div",
    { className: "container" },
    element
  );
  return element2;
};

export default CreateElementOne;
