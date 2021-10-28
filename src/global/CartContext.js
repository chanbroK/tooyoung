import React, { createContext, useReducer, useState, useEffect } from "react";
import { db } from "../Config/Config";
import { useAuth } from "../Config/AuthContext";
export const CartContext = createContext();

export default function CartContextProvider(props) {
  const [CartProduct, setCartProduct] = useState([]);
  const { currentUser } = useAuth();

  const prevCartProduct = CartProduct;

  // db.collection(`SignUpUsersData/${currentUser.uid}/Cart`).onSnapshot(
  //   (snapshot) => {
  //     let chages = snapshot.docChanges();
  //     chages.forEach((change) => {
  //       if (chages.type === "added") {
  //         prevCartProduct.push({
  //           ProductID: change.doc.id,
  //           ProductName: change.doc.data().ProductName,
  //           ProductPrice: change.doc.data().ProductPrice,
  //           ProductImage: change.doc.data().ProductImage,
  //           ProductSize: change.doc.data().ProductSize,
  //           ProductColor: change.doc.data().ProductColor,
  //           ProductQty: change.doc.data().ProductQty,
  //         });
  //       }
  //       setCartProduct(prevCartProduct);
  //     });
  //   }
  // );

  return (
    <CartContext.Provider value={{ CartProduct: [...CartProduct] }}>
      {props.children}
    </CartContext.Provider>
  );
}

// export class CartContextProvider extends React.Component {
//   state = {
//     CartProduct: [],
//   };
//   currentUser = useAuth();
//   componentDidMount() {

//   }
//   render() {
//     return (
//       <CartContext.Provider
//         value={{ CartProduct: [...this.state.CartProduct] }}
//       >
//         {this.props.children}
//       </CartContext.Provider>
//     );
//   }
// }
