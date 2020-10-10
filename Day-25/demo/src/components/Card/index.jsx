import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 200px;
  border: 1px solid #8d8d8d;
  border-radius: 10px;
  margin: 0 auto;
`;

const Card = (props) => (
  <CardDiv>
    <h3 className="name">{props.person.name}</h3>
    <p className="age">{props.person.age}</p>
    <p className="habbit">{props.person.habbit}</p>
  </CardDiv>
);

export default Card;
