import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapse: true,
  diff: true,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
