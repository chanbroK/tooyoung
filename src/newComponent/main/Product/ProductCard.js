import React, { useState } from "react";
import facelogo from "../../../component/images/얼굴로고.png";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  return (
    <div className="col-md-3">
      <Link to={`./detail/${props.shoes.id}`}>
        <img
          src={props.shoes.img}
          width="100%"
          style={{ marginBottom: "5%" }}
        />
        <h4>상품명 : {props.shoes.title}</h4>
        <p>
          {props.shoes.content} & {props.shoes.price}
        </p>
      </Link>
    </div>
  );
}
