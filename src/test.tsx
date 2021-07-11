import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { goToAnchor } from "react-scrollable-anchor";
// import { removeHash } from "react-scrollable-anchor";
import Contact from "./component/Contact";
/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/
const removeHash = () => {
  history.replaceState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
};
const moveSection = (sectionId: String) => {
  const tag = document.createElement("a");
  tag.href = `#${sectionId}`;
  tag.click();
  removeHash();
};
let beforeY = 0;
const MAX = 2;
const MIN = 1;

const Test = () => {
  const [curDivId, setCurDivId] = React.useState(1);

  React.useEffect(() => {
    window.onmousewheel = (event: WheelEvent) => {
      console.log(event.deltaY);

      if (event.deltaY > 0) {
        console.log("down");
        setCurDivId((o) => o + 1);
        console.log(curDivId + 1);
        moveSection(`section${curDivId + 1}`);
      } else if (event.deltaY < 0) {
        console.log("up");
        setCurDivId((o) => o - 1);
        moveSection(`section${curDivId + 1}`);
      }
    };
  });
  return (
    <div>
      <button
        onClick={() => {
          moveSection("section2");
          const section = document.querySelector("#section2");
          section.className = "fade";
        }}
      >
        click
      </button>
      <section id={"section1"}>
        <Contact />
      </section>
      <section id={"section2"}>
        <Contact />
      </section>
    </div>
  );
};

export default Test;
