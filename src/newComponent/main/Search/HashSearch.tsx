import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
export default function HashSearch() {
  const [SearchField, setSearchField] = useState("");
  return (
    <div className="col" style={{}}>
      <div style={{ marginTop: "10px", fontSize: "120%" }}>
        <a>HASHTAG SEARCH</a>
      </div>
      <div style={{ marginTop: "10px" }}>
        <a style={{ fontSize: "90%" }}>RECOMMAND</a>
        <br />
        <a style={{ fontWeight: "lighter", fontSize: "60%" }}>
          #친환경 #스트릿
        </a>
      </div>
      <div style={{ marginTop: "10px" }}>
        <a style={{ fontSize: "90%" }}>MULTI SEARCH</a>
        <br />
        <a style={{ fontWeight: "lighter", fontSize: "60%" }}>
          #스트릿 #여성 #하의
        </a>
      </div>
      <div style={{ marginLeft: "50%", marginTop: "5%" }}>
        <input
          type="search"
          onChange={(e) => setSearchField(e.currentTarget.value)}
          style={{ width: "80%" }}
        />
        <BsSearch style={{ marginLeft: "-20px" }} />
      </div>
    </div>
  );
}
