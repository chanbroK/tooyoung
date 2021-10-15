import React, { useState, useContext } from "react";
import { useAuth } from "../../Config/AuthContext";
import { db } from "../../Config/Config";
import { CartContext } from "../../global/CartContext";
import NavB from "../NavBar/NavB";

export default function Cart() {
  const { currentUser } = useAuth();
  const [Image, setImage] = useState([]);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Size, setSize] = useState("");
  const [Qty, setQty] = useState("");
  const [Color, setColor] = useState("");

  const { CartProducts } = useContext(CartContext);

  const TotalPrice = Price;
  return (
    <>
      <NavB />
      {CartProducts.map((cartproduct) => (
        <div className="col-md-3">
          <div key={cartproduct.ProductID}>
            <img src={cartproduct.ProductImage[0]} />
          </div>
        </div>
      ))}
      <div>{currentUser.Name}</div>
    </>
  );
}

// snapshot.forEach((doc) => {
//   setImage(snapshot.data().ProductImage[0]);
//   setName(snapshot.data().ProductName);
//   setPrice(snapshot.data().ProductPrice);
//   setSize(snapshot.data().ProductSize);
//   setQty(snapshot.data().ProductQty);
//   setColor(snapshot.data().ProductColor);
// });
// db.collection(`SignUpUsersData/${currentUser.uid}/Cart`)
//   .doc(id)
//   .get()
//   .then((snapshot) => {
//     setImage(snapshot.data().ProductImage);
//     setName(snapshot.data().ProductName);
//     setPrice(snapshot.data().ProductPrice);
//     setSize(snapshot.data().ProductSize);
//     setQty(snapshot.data().ProductQty);
//     setColor(snapshot.data().ProductColor);
//   });
