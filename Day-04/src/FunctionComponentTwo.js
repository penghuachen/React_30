import React from "react";

const WelcomeTwo = (props) => {
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <p>{props.children}</p>
    </>
  );
};

export default WelcomeTwo;
