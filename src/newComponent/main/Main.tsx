import React, { useState } from "react";
import NavB from "../NavBar/NavB";
import Banner from "./Banner/Banner";
import HashSearch from "./Search/HashSearch";
import Product from "./Product/ProductCard";
import ScrollContainer from "react-indiana-drag-scroll";
import Data from "../Product/Product";
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
          <div>
            <Product shoes={shoes} />
            <Product shoes={shoes} />
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
}
