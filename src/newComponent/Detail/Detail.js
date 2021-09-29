import React, { useContext, useState } from "react";
import { ProductsContext } from "../../global/ProductsContext";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../Config/Config";
export default function Detail(props) {
  let { id } = useParams();
  const { products } = useContext(ProductsContext);
  console.log(id);
  const [Image, setImage] = useState([]);
  const [Name, setName] = useState("");
  const [Content, setContent] = useState("");
  const [Price, setPrice] = useState("");
  db.collection("Products")
    .doc(id)
    .get()
    .then((snapshot) => {
      setImage(snapshot.data().ProductImage);
      setName(snapshot.data().ProductName);
      setContent(snapshot.data().ProductContent);
      setPrice(snapshot.data().ProductPrice);
    });

  return (
    <div className="container">
      ---------
      {/* <div className="col-md-6 mt-4" key={products[id].ProductID}>
        <img
          src={products[id].ProductImage}
          width="100%"
          style={{ marginBottom: "5%" }}
        />
        <h4 className="pt-5">{products[id].ProductName}</h4>
        <p>{products[id].ProductContent}</p>
        <p>{products[id].ProductPrice}</p>
      </div> */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-img">
            <img
              src={Image}
              width="100%"
              height="300px"
              style={{ marginBottom: "5%" }}
            />
          </div>
          <div className="product-name">
            <h4>상품명 : {Name}</h4>
          </div>
          <div className="product-price">
            <p>
              {Content} & {Price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
