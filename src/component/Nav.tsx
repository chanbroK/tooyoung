import React from "react";
import Navbar from "react-bootstrap/Navbar";
export default function Nav() {
  return (
    <div className="fixed-top">
      <div className="d-inline">
        <h3 className=" d-inline">TooYoungToDisappear</h3>
      </div>

      <ul
        style={{
          textAlign: "center",
          float: "right",
          opacity: "1",
          marginRight: "5%",
        }}
      >
        <li className=" d-inline" style={{ marginRight: "5%" }}>
          <h5 className=" d-inline">sns</h5>
        </li>
        <li className=" d-inline" style={{ marginRight: "5%" }}>
          <h5 className=" d-inline">sns</h5>
        </li>
        <li className=" d-inline" style={{ marginRight: "5%" }}>
          <h5 className=" d-inline">sns</h5>
        </li>
      </ul>
    </div>
  );
}
