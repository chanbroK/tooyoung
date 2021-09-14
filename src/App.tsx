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
import { Helmet } from "react-helmet";
import logoImage from "./component/images/mainlogo.jpeg";
import Main from "./newComponent/main/Main";

import { Route, Switch, BrowserRouter } from "react-router-dom";
const MAX = 5;
const MIN = 1;

const App = () => {
  const [curDivId, setCurDivId] = React.useState(1);
  const changeCurDivId = (id) => {
    setCurDivId(id);
  };
  React.useEffect(() => {
    window.onwheel = (event: WheelEvent) => {
      if (event.deltaY > 0 && curDivId < MAX) {
        setCurDivId((o) => o + 1);
      } else if (event.deltaY < 0 && curDivId > MIN) {
        setCurDivId((o) => o - 1);
      }
    };
  }, [curDivId]);
  const webTitle = "TooYoung";
  return (
    <>
      <Helmet>
        <title>TooYoung</title>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/jpeg" href={logoImage} />
      </Helmet>

      <div style={{ fontFamily: "NanumBarumGothic" }}>
        {curDivId === 1 ? (
          <FadeIn transitionDuration={1500} visible={true}>
            <FirstPage changeCurDivId={changeCurDivId} />
          </FadeIn>
        ) : null}
        {curDivId === 2 ? (
          <FadeIn transitionDuration={1500} visible={true}>
            <SecondPage changeCurDivId={changeCurDivId} />
          </FadeIn>
        ) : null}
        {curDivId === 3 ? (
          <FadeIn transitionDuration={1500} visible={true}>
            <ThirdPage changeCurDivId={changeCurDivId} />
          </FadeIn>
        ) : null}
        {curDivId === 4 ? (
          <FadeIn transitionDuration={1500} visible={true}>
            <Contact changeCurDivId={changeCurDivId} />
          </FadeIn>
        ) : null}
        {curDivId === 5 ? (
          <FadeIn transitionDuration={1500} visible={true}>
            <LastPage changeCurDivId={changeCurDivId} />
          </FadeIn>
        ) : null}
      </div>
      {/* {curDivId === 6 ? (
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
        ) : null} */}
    </>
  );
};

export default App;
