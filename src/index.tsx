import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDom from "react-router-dom";
import Normal from "./Normal";
import Manager from "./Manager";
import Test from "./test";
import App from "./App";
import "./index.css";
import { RemoveScroll } from "react-remove-scroll";

ReactDOM.render(
  <React.StrictMode>
    <RemoveScroll>
      <ReactRouterDom.BrowserRouter>
        <ReactRouterDom.Route path="/" component={Normal} exact />
        <ReactRouterDom.Route path="/tooyoung" component={Manager} exact />
      </ReactRouterDom.BrowserRouter>
    </RemoveScroll>
  </React.StrictMode>,
  document.getElementById("root")
);
