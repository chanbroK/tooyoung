import React from "react";
import NavB from "../NavBar/NavB";
import Banner from "./Banner/Banner";
import HashSearch from "./Search/HashSearch";
export default function Main() {
  return (
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
      </div>
    </div>
  );
}
