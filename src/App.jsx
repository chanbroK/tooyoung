import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import logoImage from "./component/images/mainlogo.jpeg";
import * as ReactRouterDom from "react-router-dom";
import Main from "./newComponent/main/Main";
import NavB from "./newComponent/NavBar/NavB";
import Detail from "./newComponent/Detail/Detail";
import Product from "./newComponent/Product/Product";
import Normal from "./Normal";
import Manager from "./Manager";
import upload from "./newComponent/Upload/Upload";
import { SignUp } from "./newComponent/SignUp/SignUp";
import { LoginPage } from "./newComponent/LoginPage/LoginPage";
import { auth, db } from "./Config/Config";

const MAX = 5;
const MIN = 1;

const App = () => {
  const [curDivId, setCurDivId] = React.useState(1);
  const changeCurDivId = (id) => {
    setCurDivId(id);
  };
  // React.useEffect(() => {
  //   window.onwheel = (event: WheelEvent) => {
  //     if (event.deltaY > 0 && curDivId < MAX) {
  //       setCurDivId((o) => o + 1);
  //     } else if (event.deltaY < 0 && curDivId > MIN) {
  //       setCurDivId((o) => o - 1);
  //     }
  //   };
  // }, [curDivId]);
  const webTitle = "TooYoung";

  const [shoes, setshoes] = useState(Product);
  const [user, setuser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            setuser(snapshot.data().Name);
          });
      } else {
        setuser(null);
      }
    });
  });

  return (
    <>
      <Helmet>
        <title>TooYoung</title>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/jpeg" href={logoImage} />
      </Helmet>

      <div style={{ fontFamily: "NanumBarumGothic" }}>
        <ReactRouterDom.Route path="/tooyoung" component={Manager} exact />
        <ReactRouterDom.Route path="/" component={() => <Main user={user} />} />
        <ReactRouterDom.Route path="/Detail/:id">
          <Detail shoes={shoes} />
        </ReactRouterDom.Route>
        <ReactRouterDom.Route path="/upload" component={upload} />
        <ReactRouterDom.Route path="/signup" component={SignUp} />
        <ReactRouterDom.Route path="/login" component={LoginPage} />
      </div>
    </>
  );
};

export default App;

/* {curDivId === 1 ? (
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
      </div> */
/* {curDivId === 6 ? (
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
        ) : null} */
