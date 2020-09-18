import React from "react";

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
};

const UseFunction = () => {
  const element = <p className="text">Hello, {formatName(user)}!</p>;
  return element;
};

export default UseFunction;
