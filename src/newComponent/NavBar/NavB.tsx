import React from "react";
import logo from "../../component/images/투영 로고.png";
import { Link } from "react-router-dom";
export default function NavB() {
  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: "120px",
        backgroundColor: "white",
        borderWidth: 10,
        borderBottom: "1px solid rgb(212, 212, 212)",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          style={{
            position: "absolute",
            left: "50%",
            width: "80px",
            height: "80px",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </Link>
      <Link to="/login">
        <a
          style={{
            position: "absolute",
            left: "85%",
            top: "70%",
            transform: "translate(-50%,-50%)",
          }}
        >
          LOGIN
        </a>
      </Link>
      <Link to="signup">
        <a
          style={{
            position: "absolute",
            left: "90%",
            top: "70%",
            transform: "translate(-50%,-50%)",
          }}
        >
          JOIN
        </a>
      </Link>
    </nav>
  );
}
