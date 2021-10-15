import React, { createContext, useReducer } from "react";
import { db } from "../Config/Config";
import { useAuth } from "../Config/AuthContext";

export const CartContext = createContext();

export class CartContextProvider extends React.Component {
  state = {
    CartProduct: [],
  };

  componentDidMount() {
    const prevCartProduct = this.state.CartProduct;
    const { currentUser } = this.props.useAuth();
    db.collection(`SignUpUsersData/${currentUser.uid}/Cart`).onSnapshot(
      (snapshot) => {
        let chages = snapshot.docChanges();
        chages.forEach((change) => {
          if (chages.type === "added") {
            prevCartProduct.push({
              ProductID: change.doc.id,
              ProductName: change.doc.data().ProductName,
              ProductPrice: change.doc.data().ProductPrice,
              ProductImage: change.doc.data().ProductImage,
              ProductSize: change.doc.data().ProductSize,
              ProductColor: change.doc.data().ProductColor,
              ProductQty: change.doc.data().ProductQty,
            });
          }
          this.setState({
            CartProduct: prevCartProduct,
          });
        });
      }
    );
  }
  render() {
    return (
      <CartContext.Provider
        value={{ CartProduct: [...this.state.CartProduct] }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
