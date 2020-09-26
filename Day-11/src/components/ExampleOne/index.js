import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 60%;
  margin: 0 auto;
`;

const ExampleOne = () => (
  <Wrapper>
    <Title>Hello Styled components!</Title>
  </Wrapper>
);

export default ExampleOne;
