import React from "react";
import logo from "../../component/images/투영 로고 글씨.png";
export default function NavB() {
  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: "120px",

        borderWidth: 10,
        borderBottom: "1px solid rgb(212, 212, 212)",
      }}
    >
      <img
        src={logo}
        style={{
          position: "absolute",
          left: "50%",
          width: "300px",
          height: "100px",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </nav>
  );
}
