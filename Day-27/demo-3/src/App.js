import React, { Component, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Text from function component's state");

  const changeTextHandler = () => {
    setText("Text changed from function component's useState method");
  };

  return (
    <div className="App">
      <h2>function component 範例: 使用 useState</h2>
      <p>{text}</p>
      <button onClick={changeTextHandler}>變更文字</button>
    </div>
  );
}

// 比對 function component 的差異
// export default class App extends Component {
//   state = {
//     text: "Text from class-based component's state"
//   };

//   changeTextHandler = () => {
//     this.setState({
//       text: "Text changed from class-based component's setState method"
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h2>Class-based component 範例: 使用 this.state</h2>
//         <p>{this.state.text}</p>
//         <button onClick={this.changeTextHandler}>變更文字</button>
//       </div>
//     );
//   }
// }
