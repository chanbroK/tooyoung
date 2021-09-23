import React, { createContext } from "react";
import { db } from "../Config/Config";

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const prevProudcts = this.state.products;
    db.collection("Products").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          prevProudcts.push({
            ProductID: change.doc.id,
            ProductName: change.doc.data().ProductName,
            ProductPrice: change.doc.data().ProductPrice,
            ProductImage: change.doc.data().ProductImage,
            ProductContent: change.doc.data().ProductContent,
          });
        }
        this.setState({
          products: prevProudcts,
        });
      });
    });
  }
  render() {
    return (
      <ProductsContext.Provider value={{ products: [...this.state.products] }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
