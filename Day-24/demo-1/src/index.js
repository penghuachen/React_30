import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/rootReducer";
import { logger } from "./store/middleware";
import thunk from "redux-thunk";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
