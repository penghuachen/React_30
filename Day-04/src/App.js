import React from "react";
import "./styles.css";

// components
import Welcome from "./ClassBasedComponent";
import WelcomeOne from "./FunctionComponentOne";
import WelcomeTwo from "./FunctionComponentTwo";
import TimerOne from "./TimerOne";
import TimerTwo from "./TimerTwo";

export default function App() {
  return (
    <div className="App">
      <h3>Timer(Class-based component)</h3>
      <TimerOne />
      <hr />
      <h3>Timer(Function component)</h3>
      <TimerTwo />
      <hr />
      <h3>Class-based component</h3>
      <Welcome name="Sara" />
      <hr />

      <h3>Function component One</h3>
      <WelcomeOne name="Sara" />
      <hr />

      <h3>Function component Two</h3>
      <WelcomeTwo name="Sara">Hello World!</WelcomeTwo>
    </div>
  );
}
