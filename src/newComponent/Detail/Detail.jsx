import React from "react";

import { useHistory, useParams } from "react-router-dom";
export default function Detail(props) {
  let { id } = useParams();

  return (
    <div className="container">
      ---------
      <div className="col-md-6 mt-4">
        <img
          src={props.shoes[id].img}
          width="100%"
          style={{ marginBottom: "5%" }}
        />
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}</p>
      </div>
    </div>
  );
}
