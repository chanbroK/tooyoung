import React, { useContext } from "react";
import { ProductsContext } from "../../global/ProductsContext";
//import { CartContext } from '../Global/CartContext'
import { Link } from "react-router-dom";
export const Products = () => {
  const { products } = useContext(ProductsContext);

  //  const { dispatch } = useContext(CartContext);

  return (
    <>
      {/* {products.length !== 0 && <h1>Products</h1>} */}
      <div className="row">
        {/* {products.length === 0 && (
          <div>slow internet...no products to display</div>
        )} */}

        {products.map((product) => (
          <div className="col-md-3">
            <Link to={`detail/${product.ProductID}`}>
              <div className="product-card" key={product.ProductID}>
                <div className="product-img">
                  <img
                    src={product.ProductImage}
                    width="100%"
                    height="300px"
                    style={{ marginBottom: "5%" }}
                  />
                </div>
                <div className="product-name">
                  <h4>상품명 : {product.ProductName}</h4>
                </div>
                <div className="product-price">
                  <p>
                    {product.ProductContent} & {product.ProductPrice}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
