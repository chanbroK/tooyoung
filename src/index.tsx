import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDom from "react-router-dom";
import Normal from "./Normal";
import Manager from "./Manager";
import Test from "./test";
import App from "./App";
import "./index.css";
import { RemoveScroll } from "react-remove-scroll";
import Main from "./newComponent/main/Main";
import NavB from "./newComponent/NavBar/NavB";
ReactDOM.render(
  <React.StrictMode>
    <RemoveScroll>
      {/* <NavB /> */}
      <ReactRouterDom.BrowserRouter>
        <ReactRouterDom.Route path="/" component={Normal} exact />
        <ReactRouterDom.Route path="/tooyoung" component={Manager} exact />
        <ReactRouterDom.Route path="/main" component={Main} exact />
      </ReactRouterDom.BrowserRouter>
    </RemoveScroll>
  </React.StrictMode>,
  document.getElementById("root")
);
