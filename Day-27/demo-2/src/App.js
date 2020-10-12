import React, { Component, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Text from function component's state");

  useEffect(() => {
    setText("Text changed from function component's useState method");
  }, [text]);

  return (
    <div className="App">
      <h2>
        function component 範例: 使用 useEffect 在相似於 componentDidMount
        的階段更新 state
      </h2>
      <p>{text}</p>
    </div>
  );
}

// 比對 function component 的差異
// export default class App extends Component {
//   state = {
//     text: "Text from class-based component's state"
//   };

//   componentDidMount() {
//     this.setState({
//       text: "Text changed from class-based component's setState method"
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h2>Class-based component 範例: 於 componentDidMount 方法中更新 state</h2>
//         <p>{this.state.text}</p>
//       </div>
//     );
//   }
// }
