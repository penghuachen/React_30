import React from "react";
import styled from "styled-components";

const BookingSection = styled.section`
  width: 500px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #8d8d8d;

  .booking-btn {
    background: palevioletred;
    color: white;
    padding: 10px;
  }
`;

const ExampleFour = () => (
  <BookingSection>
    <button className="booking-btn">這是一個按鈕</button>
  </BookingSection>
);

export default ExampleFour;
