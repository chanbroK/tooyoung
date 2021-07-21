import React from "react";
import logoImage from "./images/mainlogo.jpeg";
export default function FirstPage() {
  return (
    <div>
      <div
        style={{ backgroundColor: "black", width: "100vw", height: "50vh" }}
      ></div>
      <div
        style={{ backgroundColor: "white", width: "100vw", height: "50vh" }}
      ></div>
      <img
        src={logoImage}
        style={{
          justifyContent: "center",
          top: "50%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
          width: "25vw",
          height: "40vh",
          position: "absolute",
        }}
      />
      <div style={{ top: "95%", left: "80%", position: "absolute" }}>
        <h6 style={{ fontWeight: "lighter" }}>@TooYoungToDisappear</h6>
      </div>
      <ul style={{ position: "absolute", top: "41%", left: "95%" }}>
        <li
          className="fas fa-circle"
          style={{ color: "#333333", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
      </ul>
    </div>
  );
}
