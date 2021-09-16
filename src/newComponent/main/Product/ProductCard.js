import React, { useState } from "react";
import facelogo from "../../../component/images/얼굴로고.png";
export default function ProductCard(props) {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="row">
        <div className="col-md-3">
          <img src={facelogo} width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-3">
          <img
            src={props.shoes[0].img}
            width="100%"
            style={{ marginBottom: "5%" }}
          />
          <h4>상품명 : {props.shoes[0].title}</h4>
          <p>
            {props.shoes[0].content} & {props.shoes[0].price}
          </p>
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
