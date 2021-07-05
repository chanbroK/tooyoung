import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import sample from "./sample.jpg";
import Navigation from "./component/Nav";
const sampleSize = "400";
const App3 = () => {
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
  return <div>{result}</div>;
};

export default App3;
