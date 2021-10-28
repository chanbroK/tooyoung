import React, { useState, useContext } from "react";
import { useAuth } from "../../Config/AuthContext";
import { db } from "../../Config/Config";
import { CartContext } from "../../global/CartContext";
import NavB from "../NavBar/NavB";
import { ProductsContext } from "../../global/ProductsContext";
export default function Cart() {
  const { currentUser } = useAuth();
  const [Image, setImage] = useState([]);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Size, setSize] = useState("");
  const [Qty, setQty] = useState("");
  const [Color, setColor] = useState("");
  const { products } = useContext(ProductsContext);

  // db.collection("SignUpUsersData")
  //   .doc(currentUser.uid)
  //   .collection("Cart")
  //   .doc(products.ProductId)
  //   .get()
  //   .then((snapshot) => {
  //     setImage(snapshot.data().ProductImage);
  //     setName(snapshot.data().ProductName);
  //     setPrice(snapshot.data().ProductPrice);
  //     setSize(snapshot.data().ProductSize);
  //     setQty(snapshot.data().ProductQty);
  //     setColor(snapshot.data().ProductColor);
  //   });

  console.log(currentUser.uid);
  const TotalPrice = Price;
  return (
    <div>
      <span>{Image}</span>
    </div>
  );
}
