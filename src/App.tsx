import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./component/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./component/Contact";
import sampleImg from "./sample.jpg";
import { scrollAction } from "./scrollAction";
import FadeIn from "react-fade-in";
let beforeY = 0;
const MAX = 10;
const MIN = 1;
const App = () => {
  const [curDivId, setCurDivId] = React.useState(1);
  React.useEffect(() => {
    window.scrollTo(0, 50);

    console.log(window.scrollY);
    window.onscroll = () => {
      console.log("ASDF");
      if (beforeY < window.scrollY) {
        if (Math.abs(beforeY - window.scrollY) > 100 && curDivId < MAX) {
          console.log("down");
          beforeY = window.scrollY;
          setCurDivId(o => o + 1);
          window.scrollTo(0, 50);
          console.log(curDivId);
        }
      } else if (beforeY > window.scrollY) {
        if (Math.abs(beforeY - window.scrollY) > 100 && curDivId > MIN) {
          console.log("up");
          beforeY = window.scrollY;
          setCurDivId(o => o - 1);
          window.scrollTo(0, 50);
          console.log(curDivId);
        }
      }
    };
  });
  React.useEffect(() => {});
  return (
    <div>
      {curDivId === 1 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          {/* <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div> */}
          <Contact />
          {/* <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div> */}
        </FadeIn>
      ) : null}
      {curDivId === 2 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 3 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 4 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 5 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 6 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 7 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 8 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 9 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
      {curDivId === 10 ? (
        <FadeIn transitionDuration={2000} visible={true}>
          <div style={{ backgroundColor: "blue", width: "100vw", height: "50px" }}></div>
          <Contact />
          <div style={{ backgroundColor: "red", width: "100vw", height: "50px" }}></div>
        </FadeIn>
      ) : null}
    </div>
  );
};

export default App;
