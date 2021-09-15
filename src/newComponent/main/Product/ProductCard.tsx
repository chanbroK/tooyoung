import React from "react";
import facelogo from "../../../component/images/얼굴로고.png";
export default function ProductCard() {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="row">
        <div className="col-md-3">
          <img src={facelogo} width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-3">
          <img src={facelogo} width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-3">
          <img src={facelogo} width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-3">
          <img src={facelogo} width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
      </div>
    </div>
  );
}
