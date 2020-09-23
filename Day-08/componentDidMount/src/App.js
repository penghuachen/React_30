import React, { Component } from "react";
import "./styles.css";
import axios from "axios";

export default class App extends Component {
  state = {
    stations: []
  };

  async componentDidMount() {
    const endpoint =
      "https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json";
    const { data } = await axios.get(endpoint);
    this.setState({ stations: data });
  }

  render() {
    return (
      <div className="App">
        <h1>componentDidMount 中發非同步請求測試範例</h1>
        {this.state.stations.map((station) => (
          <h2>Locaton: {station.Location}</h2>
        ))}
      </div>
    );
  }
}
