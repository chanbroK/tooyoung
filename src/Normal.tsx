import App from "./App";
import FirstPage from "./component/FirstPage";
import React from "react";
import * as Scroll from "react-scroll";
import SecondPage from "./component/SecondPage";
import ThirdPage from "./component/ThirdPage";
import Contact from "./component/Contact";
const Normal = () => {
  React.useEffect(() => {
    Scroll.Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin scroll");
    });
    Scroll.Events.scrollEvent.register("end", (to, element) => {
      console.log("begin scorll");
    });
  }, []);
  return (
    <div>
      <Contact />

      <App />
    </div>
  );
};

export default Normal;
