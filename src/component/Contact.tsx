import React from "react";
import Form from "react-bootstrap/Form";
export default function Contact() {
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
      <Form style={{ top: "30%", left: "67%", position: "absolute" }}>
        <Form.Control
          type="email"
          placeholder="tooyoungtodisappear@gmail.com"
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
      <Form style={{ top: "80%", left: "67%", position: "absolute" }}>
        <Form.Control
          type="email"
          placeholder="tooyoungtodisappear@gmail.com"
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
