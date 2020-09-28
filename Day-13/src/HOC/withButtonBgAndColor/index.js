import React from "react";
import "./index.css";

const withButtonBgAndColor = (WrapComponent) => {
  return (props) => (
    <div className="btn-container-1">
      <WrapComponent />
    </div>
  );
};

export default withButtonBgAndColor;
