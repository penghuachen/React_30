import React from "react";
import "./index.scss";

const Person = props => {
  const { name, changeNameHandler } = props;
  return (
    <div className="person">
      <h1>{name}</h1>
      <input
        type="text"
        onChange={e => {
          changeNameHandler(e, e.target.value, 0);
        }}
        placeholder="type name here..."
      />
    </div>
  );
};

export default Person;
