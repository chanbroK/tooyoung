import React, { useState, useContext } from "react";
import { useAuth } from "../../Config/AuthContext";
import { db } from "../../Config/Config";
import { CartContext } from "../../global/CartContext";
import NavB from "../NavBar/NavB";
import { ProductsContext } from "../../global/ProductsContext";
import { saveToFireStore } from "../../util/email";
import name from "./firestoreName";
export default function Cart() {
  const { currentUser } = useAuth();
  // const [Image, setImage] = useState([]);
  // const [Name, setName] = useState([]);
  // const [Price, setPrice] = useState([]);
  // const [Size, setSize] = useState([]);
  // const [Qty, setQty] = useState([]);
  // const [Color, setColor] = useState("");
  const { products } = useContext(ProductsContext);
  const colors = [];
  const sizes = [];
  const Images = [];
  const Name = [];
  const qty = [];
  const Price = [];

  React.useEffect(() => {
    db.collection(`${name.SignedUpUsersData}/${currentUser.uid}/Cart`)
      .get()
      .then((response) => {
        response.forEach((x) => {
          // Images.push(x.data().ProductColor);
          sizes.push(x.data().ProductColor);
          Name.push(x.data().ProductColor);
          qty.push(x.data().ProductColor);
          Price.push(x.data().ProductColor);
          colors.push(x.data().ProductColor);
          // setColor([...Color, x.data().ProductColor]);
        });
        console.log(colors);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const TotalPrice = Price;
  return (
    <div>
      <h1>color :{colors[0]}</h1>
      <h1>name : {Name[0]}</h1>
      <h1>qty :{qty[0]}</h1>
      <h1>price : {Price[0]}</h1>
      {/* <img src={Images[0]} /> */}
    </div>
  );
}

// const getCart = async () => {
//   const CartRef = db
//     .collection("SignUpUsersData")
//     .doc(currentUser.uid)
//     .collection("Cart");
//   const snapshot = await CartRef.data();

//   snapshot.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//   });
// };

// const getCart = async (pid) => {
//   const CartInfo = await db
//     .collection(`SignUpData/${currentUser.uid}/Cart${pid}`)
//     .get();

//   console.log(CartInfo, "asdf");
// };

// db.collection("SignUpUsersData")
//   .doc(currentUser.uid)
//   .collection("Cart")
//   .doc("test")
//   .get()
//   .then((snapshot) => {
//     setImage(snapshot.data().ProductImage);
//     setName(snapshot.data().ProductName);
//     setPrice(snapshot.data().ProductPrice);
//     setSize(snapshot.data().ProductSize);
//     setQty(snapshot.data().ProductQty);
//     setColor(snapshot.data().ProductColor);
//   });
