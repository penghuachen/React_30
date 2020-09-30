import React, { Component } from "react";
import "./index.css";
import Context from "../Context";

class Card2 extends Component {
  // 可以這麼宣告來使用 this.context
  // static contextType = Context;
  render() {
    return (
      <div className="card" onClick={this.context.changeTextByContextAPI}>
        {this.context.contextText}
        {/* /這個方式也可以 */}
        {/* <Context.Consumer>
        {(context) => (
          <div
            className="card"
            onClick={context.changeTextByContextAPIInFuncComponent}
          >
            {context.contextTextInFuncComponent}
          </div>
        )}
      </Context.Consumer> */}
      </div>
    );
  }
}

// 也可以選擇這種方式來使用 this.context
Card2.contextType = Context;
export default Card2;
