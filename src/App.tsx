import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "aos/dist/aos.css";
import Contact from "./component/Contact";
import FadeIn from "react-fade-in";
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";
import ThirdPage from "./component/ThirdPage";
import { Last } from "react-bootstrap/esm/PageItem";
import LastPage from "./component/LastPage";
const MAX = 10;
const MIN = 1;

const App = () => {
  const [curDivId, setCurDivId] = React.useState(1);
  React.useEffect(() => {
    window.onwheel = (event: WheelEvent) => {
      console.log(event.deltaY);
      if (event.deltaY > 0 && curDivId < MAX) {
        console.log("down");
        setCurDivId((o) => o + 1);
      } else if (event.deltaY < 0 && curDivId > MIN) {
        console.log("up");
        setCurDivId((o) => o - 1);
      }
    };
  }, [curDivId]);
  return (
    <div style={{ fontFamily: "NanumBarumGothic" }}>
      {curDivId === 1 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <FirstPage />
        </FadeIn>
      ) : null}
      {curDivId === 2 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <SecondPage />
        </FadeIn>
      ) : null}
      {curDivId === 3 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <ThirdPage />
        </FadeIn>
      ) : null}
      {curDivId === 4 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <Contact />
        </FadeIn>
      ) : null}
      {curDivId === 5 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <LastPage />
        </FadeIn>
      ) : null}
      {curDivId === 6 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <Contact />
        </FadeIn>
      ) : null}
      {curDivId === 7 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <Contact />
        </FadeIn>
      ) : null}
      {curDivId === 8 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <Contact />
        </FadeIn>
      ) : null}
      {curDivId === 9 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <Contact />
        </FadeIn>
      ) : null}
      {curDivId === 10 ? (
        <FadeIn transitionDuration={1500} visible={true}>
          <Contact />
        </FadeIn>
      ) : null}
    </div>
  );
};

export default App;
