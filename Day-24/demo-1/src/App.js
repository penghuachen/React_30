import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/action";
function App(props) {
  return (
    <div className="App">
      <h1 onClick={props.changeText}>{props.text}</h1>
      <p>請打開 console 查看</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeText: () => {
      dispatch(actionCreators.asyncChangeTextHandler());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
