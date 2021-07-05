import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import sample from "./sample.jpg";

import Navigation from "./component/Nav";

import RegistEmail from "./component/RegistEmail";
import SaveEmail from "./component/SaveEmail";
import { scrollAction } from "./scrollAction";
const sampleSize = "500";

const App3 = () => {
  let beforeY = 0;
  const result = [];
  for (let i = 0; i < 20; i++) {
    result.push(
      <ScrollAnimation animateIn="fadeIn">
        <Navigation />
        <h1>SomeSomes</h1>
        <h2>Some Text</h2>
        <img src={sample} width={sampleSize} height={sampleSize} alt="sample" />
      </ScrollAnimation>
    );
  }
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollAction(500, beforeY);
      beforeY = window.scrollY;
    });
  }, []);
  return <div>{result}</div>;
};

export default App3;
