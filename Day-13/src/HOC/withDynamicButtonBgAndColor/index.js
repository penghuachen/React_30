import React from "react";
import "./index.css";

const withDynamicButtonBgAndColor = (WrapComponent, type) => {
  return (props) => <WrapComponent className={type} {...props} />;
};

export default withDynamicButtonBgAndColor;
