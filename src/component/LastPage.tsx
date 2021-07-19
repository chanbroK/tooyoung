import React from "react";

export default function LastPage() {
  return (
    <div>
      <div
        style={{ backgroundColor: "black", width: "100vw", height: "50vh" }}
      ></div>
      <div
        style={{ backgroundColor: "white", width: "100vw", height: "50vh" }}
      ></div>
      <div
        style={{
          justifyContent: "center",
          top: "25%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
          width: "70vw",
          height: "40vh",
          position: "absolute",
          backgroundColor: "white",
        }}
      ></div>
      <div style={{ top: "75%", left: "15%", position: "absolute" }}>
        <a
          style={{
            fontFamily: "NanumBarunGothicBold",
            color: "black",
            fontSize: "1.5vw",
          }}
        >
          TooYoung 사업제안서 <br />
          2021 가을시즌 We Love Our Planet
        </a>
      </div>
      <div style={{ top: "90%", left: "15%", position: "absolute" }}>
        <a style={{ fontWeight: "lighter" }}>
          투영 <br />
          서울시 광진구 능동로 209
        </a>
      </div>
      <div style={{ top: "90%", left: "40%", position: "absolute" }}>
        <a style={{ fontWeight: "lighter" }}>
          사업자번호 : 000-00-00000 <br />
          통신판매업 : AAAAAA
        </a>
      </div>
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
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li
          className="fas fa-circle"
          style={{ color: "#333333", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
      </ul>
      <div style={{ top: "90%", left: "65%", position: "absolute" }}>
        <a style={{ fontWeight: "lighter" }}>
          대표 번호 : 010-0000-0000 <br />
          대표 메일 : tooyoungtodisappear@gmail.com
        </a>
      </div>
    </div>
  );
}
