import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: auto;
  padding: 10px;
  margin-right: 10px;
`;

const BookingButton = styled(Button)`
  background: palevioletred;
  color: white;
`;

const CancelButton = styled(Button)`
  background: blue;
  color: white;
`;

const ExampleThree = () => (
  <div>
    <Button>基礎樣式的 Button</Button>
    <BookingButton>擴展樣式的 BookingButton</BookingButton>
    <CancelButton>擴展樣式的 CancelButton</CancelButton>
  </div>
);

export default ExampleThree;
