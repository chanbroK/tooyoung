import React from "react";
import logoImage from "./images/한자투영.png";
export default function ThirdPage({changeCurDivId}) {
  return (
    <div>
      <div>
        <div
          style={{ backgroundColor: "black", width: "100vw", height: "50vh" }}
        ></div>
        <div
          style={{ backgroundColor: "white", width: "100vw", height: "50vh" }}
        ></div>

        <div style={{ top: "43%", left: "20%", position: "absolute" }}>
          <a style={{ fontSize: "3vw", fontWeight: "bold", color: "white" }}>
            FOR COSTOMURS
          </a>
        </div>
        <div style={{ top: "55%", left: "21%", position: "absolute" }}>
          <a style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
            디자이너의 꿈을 펼칠 새로운 공간
          </a>
        </div>
        <div style={{ top: "62%", left: "22%", position: "absolute" }}>
          <a style={{ fontSize: "1vw", fontWeight: "lighter" }}>
            자신의 작업물을 공유하며 진짜 디자이너로 거듭나세요.
            <br />
            오직 실력으로만 증명받을 수 있는 <br />
            "판매연계형 포트폴리오 사이트" 입니다.
          </a>
        </div>
        <div style={{ top: "74%", left: "21%", position: "absolute" }}>
          <a style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
            브랜드의 새로운 홍보공간
          </a>
        </div>
        <div style={{ top: "81%", left: "22%", position: "absolute" }}>
          <a style={{ fontSize: "1vw", fontWeight: "lighter" }}>
            비용을 청가하지 않습니다. <br />
            당신의 상품과 브랜드를 알리고 소비자들의 니즈와
            <br />
            선호도를 파악할 수 있습니다.
          </a>
        </div>
        <img
          src={logoImage}
          style={{
            justifyContent: "center",
            top: "50%",
            left: "70%",
            transform: `translate(-50%,-50%)`,
            width: "25vw",
            height: "40vh",
            position: "absolute",
          }}
        />
        <div style={{ top: "95%", left: "80%", position: "absolute" }}>
          <h6 style={{ fontWeight: "lighter" }}>@TooYoungToDisappear</h6>
        </div>
      </div>
      <ul style={{ position: "absolute", top: "41%", left: "95%" }}>
        <li onClick={()=>{
          changeCurDivId(1);
        }}
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li onClick={()=>{
          changeCurDivId(2);
        }}
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li onClick={()=>{
          changeCurDivId(3);
        }}
          className="fas fa-circle"
          style={{ color: "#333333", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li onClick={()=>{
          changeCurDivId(4);
        }}
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
        <li onClick={()=>{
          changeCurDivId(5);
        }}
          className="fas fa-circle"
          style={{ color: "#CECFCF", fontSize: "2vw", marginBottom: "-2vh" }}
        ></li>
      </ul>
    </div>
  );
}
