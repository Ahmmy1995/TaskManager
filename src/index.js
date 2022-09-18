import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import tasks from "./reducers";
import { Provider } from "react-redux";

const store = createStore(tasks);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
