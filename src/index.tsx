import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDom from "react-router-dom";
import Normal from "./Normal";
import Manager from "./Manager";
// 참고 사이트
// https://velog.io/@nomadhash/React-react-reveal%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0
// https://shylog.com/react-custom-hooks-scroll-animation-fadein/
// https://github.com/jus0k/scroll-hooks
// https://dbramwell.github.io/react-animate-on-scroll/#home

ReactDOM.render(
  <React.StrictMode>
    <ReactRouterDom.BrowserRouter>
      <ReactRouterDom.Route path="/" component={Normal} exact />
      <ReactRouterDom.Route path="/tooyoung" component={Manager} exact />
    </ReactRouterDom.BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
