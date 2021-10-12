import React, { useContext, useState } from "react";
import { ProductsContext } from "../../global/ProductsContext";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../Config/Config";
import InsideNav from "../NavBar/InsideNav";
import Brand from "../Brand/Brand";
import { Button, Form } from "react-bootstrap";
const Categoly = [
  { key: 1, value: "남자" },
  { key: 2, value: "여자" },
];

export default function Detail(props) {
  const [IsCategory, setIsCategory] = useState(1);
  let { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [Image, setImage] = useState([]);
  const [Name, setName] = useState("");
  const [Content, setContent] = useState("");
  const [Price, setPrice] = useState("");
  const [Size, setSize] = useState([]);
  const sizes = [];
  const getsize = async (id) => {
    const ref = db.collection(`Products/$(id)/inform/size`);
  };
  // const productRef = db.collection("Products");
  // const snapshot = productRef.get();
  // snapshot.forEach((doc) => {
  //   console.log(doc.id, "=>", doc.data());
  // });
  db.collection("Products")
    .doc(id)
    .get()
    .then((snapshot) => {
      setImage(snapshot.data().ProductImage);
      setName(snapshot.data().ProductName);
      setContent(snapshot.data().ProductContent);
      setPrice(snapshot.data().ProductPrice);
      setSize(snapshot.data().ProductSizes);
    });
  for (var i = 0; i < Size.length; i++) {
    sizes[i] = Size[i];
  }
  return (
    <>
      <InsideNav />
      <div
        style={{
          paddingTop: "120px",
          borderWidth: 10,
          borderBottom: "1px solid rgb(212, 212, 212)",
        }}
      >
        <div
          className="row"
          style={{
            width: "80%",
            marginLeft: "10%",
            paddingTop: "5%",
            height: "70vh",
          }}
        >
          <div className="product-img col-md-6">
            <img
              src={Image[0]}
              width="80%"
              height="95%"
              style={{
                marginLeft: "15%",
                border: "1px solid",
              }}
            />
          </div>
          <div className="col" style={{ marginLeft: "5%" }}>
            <Brand />
            <br />
            <div className="product-name">
              <h4>{Name}</h4>
            </div>
            <div>
              <span>
                <b>fabric</b> ｜ wool <br />
              </span>
              <span>
                <b>color</b> &nbsp;｜ Black/Grey/Blue
                <br />
              </span>
              <span>
                <b>size</b> &nbsp;&nbsp;&nbsp;｜
                {sizes.map((item) => (
                  <span>{item}.</span>
                ))}
              </span>

              <br />
            </div>
            <br />
            <div
              className="product-price"
              style={{ width: "80%", textAlign: "right" }}
            >
              <span style={{ fontSize: "1.5em" }}>₩ {Price}</span>
            </div>
            <br />
            <Form style={{ marginBottom: "10%" }}>
              <select
                style={{
                  width: "80%",
                  height: "5vh",
                  borderColor: "black",
                }}
                placeholder="COLOR"
                onChange={(e) => setIsCategory(e.currentTarget.value)}
                // value={IsCategory}
              >
                <option value="0" disabled selected hidden>
                  COLOR
                </option>
                {/* {Categoly.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))} */}
              </select>

              <select
                style={{
                  width: "80%",
                  height: "5vh",
                  borderColor: "black",
                  marginTop: "2%",
                }}
                placeholder="SIZE"
                onChange={(e) => setIsCategory(e.currentTarget.value)}
                // value={IsCategory}
              >
                <option value="0" disabled selected hidden>
                  SIZE
                </option>
                {sizes.map((item) => (
                  <option>{item}</option>
                ))}
              </select>
              <div>
                <Button
                  type="submit"
                  style={{
                    color: "black",
                    borderColor: "black",
                    backgroundColor: "white",
                    height: "4vh",
                    marginTop: "2%",
                    width: "10vw",
                    marginLeft: "15%",
                    borderRadius: "0px",
                  }}
                >
                  <b>CART</b>
                </Button>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "black",
                    borderColor: "black",
                    height: "4vh",
                    marginTop: "2%",
                    width: "10vw",
                    borderRadius: "0px",
                  }}
                >
                  <b>BUY NOW</b>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
