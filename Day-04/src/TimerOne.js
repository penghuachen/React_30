import React, { Component } from "react";

export default class TimerOne extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.updateTimer();
  }

  updateTimer() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  render() {
    return <div>現在時間是: {this.state.date.toLocaleTimeString()}</div>;
  }
}
