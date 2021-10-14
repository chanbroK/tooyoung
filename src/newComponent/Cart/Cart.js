import React, { useState } from "react";
import { useAuth } from "../../Config/AuthContext";
import { db } from "../../Config/Config";
import NavB from "../NavBar/NavB";

export default function Cart() {
  const { currentUser } = useAuth();
  const [Image, setImage] = useState([]);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Size, setSize] = useState("");
  const [Qty, setQty] = useState("");
  const [Color, setColor] = useState("");
  const CartRef = db.collection(`SignUpUsersData/${currentUser.uid}/Cart`);
  const snapshot = CartRef.get();

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

  const TotalPrice = Price;
  return (
    <>
      <NavB />
      <div>{currentUser.Name}</div>
      <img src={Image[0]} />
    </>
  );
}
