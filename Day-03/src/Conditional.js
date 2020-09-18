import React from "react";

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
};

const getGreeting = (user) => {
  return user ? <p>Hello, {formatName(user)}!</p> : <p>Hello, Stranger.</p>;
};

const Conditional = () => {
  // 可以切換這一行程式碼觀察
  // const element = getGreeting(user);
  const element = getGreeting();
  return element;
};

export default Conditional;
