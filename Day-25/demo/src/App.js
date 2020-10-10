import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";

import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>使用 redux-saga 模擬非同步流程</h2>
        <p>點擊按鈕後兩秒變更卡片的內容。</p>
        <Card person={this.props.person} />
        <button onClick={this.props.changeCardContentHandler}>Click Me!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.person
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCardContentHandler: () => {
      dispatch({
        type: "CHANGE_CARD_CONTENT"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
