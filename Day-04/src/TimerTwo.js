import React, { useState, useEffect } from "react";

const TimerTwo = () => {
  const [state, setState] = useState({
    date: new Date()
  });

  useEffect(() => {
    updateTimer();
  });

  const updateTimer = () => {
    setInterval(() => {
      setState({
        date: new Date()
      });
    }, 1000);
  };

  return <div>現在時間是: {state.date.toLocaleTimeString()}</div>;
};

export default TimerTwo;
