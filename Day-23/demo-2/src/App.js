import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/action-types";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>數字: {this.props.number}</h2>
        <button onClick={this.props.incrementHandler}>點擊 + 1</button>
        <button onClick={this.props.decrementHandler}>點擊 - 1</button>
        <button
          onClick={() => {
            this.props.incrementTenNumberHandler(this.props.number);
          }}
        >
          由當前數字 + 10
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementHandler: () => dispatch({ type: actionTypes.INCREMENTHANDLER }),
    decrementHandler: () => dispatch({ type: actionTypes.DECREMENTHANDLER }),
    incrementTenNumberHandler: (number) =>
      dispatch({
        type: actionTypes.INCREMENTTENNUMBERHANDLER,
        payload: {
          number
        }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
