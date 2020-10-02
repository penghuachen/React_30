import React, { Component } from "react";
import "./index.css";

import axios from "axios";

export default class PageA extends Component {
  state = {
    post: {
      title: "",
      body: ""
    }
  };

  // you can see route information here...
  componentDidMount() {
    console.log(this.props.match);
    const { id } = this.props.match.params;
    this.getPostHandler(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params;
      this.getPostHandler(id);
    }
  }

  getPostHandler = async (id) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    this.setState({
      post: {
        title: data.title,
        body: data.body
      }
    });
  };

  render() {
    return (
      <div className="page-a">
        <h1>Page A Title: {this.state.post.title}</h1>
        <p>Page A content {this.state.post.body}</p>
        <p>id: {this.props.match.params.id}</p>
      </div>
    );
  }
}
