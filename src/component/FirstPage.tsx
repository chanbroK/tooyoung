import React from "react";

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
        src={require("./images/mainlogo.jpeg")}
        style={{
          justifyContent: "center",
          top: "50%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
          width: "300px",
          height: "300px",
          position: "absolute",
        }}
      />
      <div style={{ top: "95%", left: "80%", position: "absolute" }}>
        <h6 style={{ fontWeight: "lighter" }}>@TooYoungToDisappear</h6>
      </div>
    </div>
  );
}
