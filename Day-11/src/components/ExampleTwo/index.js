import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
`;

const ExampleTwo = (props) => {
  return <CustomButton primary={props.primary}>Custom Button</CustomButton>;
};
export default ExampleTwo;
