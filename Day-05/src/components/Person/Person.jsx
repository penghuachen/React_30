import React from "react";
import "./person.css";

export default class Person extends React.Component {
  state = {
    person: [{ name: "Bill", age: "29" }]
  };

  // 透過物件的方式進行更新
  switchNameHandler = () => {
    this.setState({
      person: [{ name: "Alex", age: "25" }]
    });
  };

  // 透過 updater 的方式更新
  // switchNameHandler = () => {
  //   this.setState((state) => {
  //     return {
  //       person: [{ name: "Alex", age: "25" }]
  //     };
  //   });
  // };

  // 如果需要在更新元件後做某件事情時
  // switchNameHandler = () => {
  //   this.setState(
  //     (state) => {
  //       return {
  //         person: [{ name: "Alex", age: "25" }]
  //       };
  //     },
  //     () => {
  //       console.log("do something here....");
  //     }
  //   );
  // };

  render() {
    const { person } = this.state;
    return (
      <div className="person">
        <h1>{person[0].name}</h1>
        <p>Your Age: {person[0].age}</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}
