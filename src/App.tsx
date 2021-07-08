import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./component/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./component/Contact";
import sampleImg from "./sample.jpg";
import { scrollAction } from "./scrollAction";
const App = () => {
  const result = [];
  const divRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      debounceDelay: 50,
      once: false,
      mirror: false,
    });
    // window.onscroll = () => {
    //   scrollAction(divRef.current.clientHeight);
    // };
  });
  for (let i = 0; i < 20; i++) {
    result.push(
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        style={{ height: "100vh" }}
        ref={divRef}
      >
        <img src={sampleImg} height="100%" alt="sample" />
        <button
          onClick={() => {
            window.scrollTo(window.scrollX, window.scrollY + divRef.current.clientHeight);
          }}
        >
          down
        </button>
        <button
          onClick={() => {
            window.scrollTo(window.scrollX, window.scrollY - divRef.current.clientHeight);
          }}
        >
          up
        </button>
      </div>
    );
  }
  return <div>{result}</div>;
};

export default App;
