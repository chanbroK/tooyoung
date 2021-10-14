import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDom from "react-router-dom";
import Normal from "./Normal";
import Manager from "./Manager";

import App from "./App";
import "./index.css";
import { RemoveScroll } from "react-remove-scroll";
import Main from "./newComponent/main/Main";
import NavB from "./newComponent/NavBar/NavB";
import Detail from "./newComponent/Detail/Detail";
import Product from "./newComponent/Product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsContextProvider } from "./global/ProductsContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <RemoveScroll> */}
    {/* <NavB /> */}
    <ProductsContextProvider>
      <ReactRouterDom.BrowserRouter>
        <ReactRouterDom.Switch>
          <App />
        </ReactRouterDom.Switch>
      </ReactRouterDom.BrowserRouter>
    </ProductsContextProvider>
    {/* </RemoveScroll> */}
  </React.StrictMode>,
  document.getElementById("root")
);
