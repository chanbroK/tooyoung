import React from "react";
import Form from "react-bootstrap/Form";

import { registEmail } from "../util/email";
export default function Contact() {
  const subEmailRef = React.useRef<HTMLInputElement>(null);
  const conEmailRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <div
        style={{ backgroundColor: "white", width: "100vw", height: "50vh" }}
      ></div>
      <div
        style={{ backgroundColor: "black", width: "100vw", height: "50vh" }}
      ></div>
      <div style={{ top: "43%", left: "20%", position: "absolute" }}>
        <a
          style={{
            fontSize: "3vw",
            fontWeight: "bold",
            fontFamily: "NanumBarunGothicBold",
          }}
        >
          CONTACT US
        </a>
      </div>
      <div style={{ top: "95%", left: "20%", position: "absolute" }}>
        <a style={{ color: "white", fontSize: "1.5vw", textAlign: "center" }}>
          개인정보 처리방침
        </a>
      </div>
      <div style={{ top: "20%", left: "70%", position: "absolute" }}>
        <a style={{ fontSize: "3vw", fontWeight: "lighter" }}>CONTACT US</a>
      </div>
      <Form
        style={{ top: "30%", left: "67%", position: "absolute" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (subEmailRef.current) {
            registEmail(subEmailRef.current.value, "none", "구독", "none");
          }
        }}
      >
        <Form.Label>
          소식 구독을 원한다면, 아래에 이메일을 입력해주세요.
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="example@example.com"
          ref={subEmailRef}
          style={{
            width: "22vw",
            textAlign: "center",
            borderRadius: 10,
            borderColor: "black",
          }}
        />
      </Form>
      <div style={{ top: "60%", left: "72%", position: "absolute" }}>
        <a
          style={{
            fontSize: "3vw",
            fontWeight: "lighter",
            color: "white",
            textAlign: "center",
          }}
        >
          BUSINESS <br />
          CONTACT
        </a>
      </div>
      <Form
        style={{ top: "80%", left: "67%", position: "absolute" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (conEmailRef.current) {
            registEmail(conEmailRef.current.value, "none", "구독", "none");
          }
        }}
      >
        <Form.Label>협업을 원한다면, 아래에 이메일을 입력해주세요.</Form.Label>
        <Form.Control
          type="email"
          placeholder="example@example.com"
          ref={conEmailRef}
          style={{
            backgroundColor: "black",
            width: "22vw",
            textAlign: "center",
            borderRadius: 10,
            borderColor: "white",
            color: "white",
          }}
        />
      </Form>
      <ul style={{ position: "absolute", top: "41%", left: "95%" }}>
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
          style={{ color: "#333333", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
      </ul>
    </div>
  );
}
