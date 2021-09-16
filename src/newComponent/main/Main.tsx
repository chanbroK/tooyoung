import React, { useState } from "react";
import * as ReactRouterDom from "react-router-dom";
import NavB from "../NavBar/NavB";
import Banner from "./Banner/Banner";
import HashSearch from "./Search/HashSearch";
import Product from "./Product/ProductCard";
import ScrollContainer from "react-indiana-drag-scroll";
import Data from "../Product/Product";
import Detail from "../Detail/Detail";
export default function Main() {
  const [shoes, setShoes] = useState(Data);
  return (
    <ScrollContainer className="scroll-container">
      <div>
        <NavB />
        <div style={{ paddingTop: "120px" }}>
          {/* search area */}
          <div
            style={{
              width: "100%",
              height: "240px",
              borderWidth: 10,
              borderBottom: "1px solid rgb(212, 212, 212)",
            }}
          >
            <div className="row">
              <Banner />
              <HashSearch />
            </div>
          </div>
          <div className="container" style={{ marginTop: "5%" }}>
            <div className="row">
              {shoes.map((num, i) => {
                return <Product shoes={num} i={i} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
}
