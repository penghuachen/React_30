import React from "react";

const EmbeddedExpression = () => {
  const name = "Josh Perez";
  const element = <p className="text">Hello {name}!</p>;
  return element;
};

export default EmbeddedExpression;
