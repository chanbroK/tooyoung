import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./component/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./component/Contact";

const App = () => {
  const result = [];
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      debounceDelay: 50,
      once: false,
      mirror: true,
    });
  });
  for (let i = 0; i < 20; i++) {
    result.push(
      <div data-aos="fade-left" data-aos-easing="ease-in-out">
        <Navigation />
        <Contact />
      </div>
    );
  }
  return <div>{result}</div>;
};

export default App;
