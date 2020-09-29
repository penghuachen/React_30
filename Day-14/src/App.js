import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  focusInputByWebAPI = () => {
    document.querySelector("#input-1").focus();
  };

  focusInputByRefCallback = () => {
    this.inputEl.focus();
  };

  focusInputBycreateRef = () => {
    this.myRef.current.focus();
  };

  render() {
    return (
      <div className="App">
        <h2 onClick={this.focusInputByWebAPI}>原生 Web API - 點擊本段文字</h2>
        <input id="input-1" type="text" name="" />
        <h2 onClick={this.focusInputByRefCallback}>
          Class-besed Componet: ref callbacks - 點擊本段文字
        </h2>
        <input ref={(el) => (this.inputEl = el)} type="text" name="" />
        <h2 onClick={this.focusInputBycreateRef}>
          Class-besed Componet: createRef - 點擊本段文字
        </h2>
        <input ref={this.myRef} type="text" name="" />
      </div>
    );
  }
}

export default App;
