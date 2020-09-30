import React, { Component } from "react";
import "./styles.css";
import axios from "axios";

class App extends Component {
  state = {
    post: {
      title: "",
      body: ""
    },
    deletePost: false,
    newPost: {
      title: "",
      body: ""
    }
  };

  componentDidMount = () => {
    this.getPostHandler();
  };

  // Get method
  getPostHandler = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    this.setState({
      post: {
        title: data.title,
        body: data.body
      }
    });
  };

  // Patch method
  updatePostHandler = async () => {
    const { data } = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        // body request...
        title: "new Title",
        body: "new body content"
      },
      {
        // header configuration
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    this.setState({
      post: {
        title: data.title,
        body: data.body
      }
    });
  };

  // Post method
  addPostHandler = async () => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        // body request...
        title: "Another new Title",
        body: "Another new body content"
      },
      {
        // header configuration
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    this.setState({
      newPost: {
        title: data.title,
        body: data.body
      }
    });
  };

  // Delete method
  deletePostHandler = async () => {
    const { data } = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    this.setState({
      post: data,
      deletePost: true
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Axios 搭配 JSONPlaceholder 的基本使用(CRUD)</h1>
        <h2>取得 JSONPlaceholder 的 response</h2>
        <p>Method: getPostHandler</p>
        {!this.state.deletePost && (
          <div className="post">
            <p>
              標題：<span>{this.state.post.title}</span>
            </p>
            <p>
              內容：<span>{this.state.post.body}</span>
            </p>
          </div>
        )}
        {this.state.deletePost && (
          <h2 className="delete-text">--Delete post successfully!--</h2>
        )}
        <h2>更新一筆資料到 JSONPlaceholder 並取得 response</h2>
        <p>Method: updatePostHandler</p>
        <button onClick={this.updatePostHandler}>
          點擊更新上面 post 內容的資料
        </button>
        <h2>新增一筆資料到 JSONPlaceholder 並取得 response</h2>
        <p>Method: addPostHandler</p>
        <div className="post">
          <p>
            標題：<span>{this.state.newPost.title}</span>
          </p>
          <p>
            內容：<span>{this.state.newPost.body}</span>
          </p>
        </div>
        <button onClick={this.addPostHandler}>點擊新增一筆 post 的資料</button>
        <h2>刪除一筆資料在 JSONPlaceholder 的資料</h2>
        <p>Method: deletePostHandler</p>
        <button onClick={this.deletePostHandler}>
          點擊刪除最上方 post 的資料
        </button>
      </div>
    );
  }
}

export default App;
