import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { goToAnchor } from "react-scrollable-anchor";
import { removeHash } from "react-scrollable-anchor";
import Contact from "./component/Contact";

const Test = () => {
  const [id, setId] = React.useState(1);
  React.useEffect(() => {
    console.log(id);
    window.onscroll = () => {
      setId(id + 1);
      goToAnchor(`section ${id + 1}`);
      removeHash();
    };
  });
  return (
    <>
      <button
        onClick={() => {
          goToAnchor("section 2", false);
        }}
      >
        click
      </button>
      <ScrollableAnchor id={"section 1"}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={"section 2"}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={3}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={4}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={5}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={6}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={7}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={8}>
        <Contact />
      </ScrollableAnchor>
      <ScrollableAnchor id={9}>
        <Contact />
      </ScrollableAnchor>
    </>
  );
};

export default Test;
