import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../global/ProductsContext";
import { useHistory, useParams } from "react-router-dom";
import { auth, db } from "../../Config/Config";
import InsideNav from "../NavBar/InsideNav";
import Brand from "../Brand/Brand";
import { Button, Form } from "react-bootstrap";
import { CartContext } from "../../global/CartContext";
import { useAuth } from "../../Config/AuthContext";
const Categoly = [
  { key: 1, value: "남자" },
  { key: 2, value: "여자" },
];

export default function Detail(props) {
  const [IsCategory, setIsCategory] = useState(1);
  let { id } = useParams();
  const history = useHistory();
  const [Image, setImage] = useState([]);
  const [Name, setName] = useState("");
  const [Content, setContent] = useState("");
  const [Price, setPrice] = useState("");
  const [Size, setSize] = useState([]);
  const [Color, setColor] = useState([]);
  const [userId, setuserId] = useState("");
  const [userSize, setUserSize] = useState("");
  const [userColor, setUserColor] = useState("");
  const colors = [];
  const sizes = [];
  const getsize = async (id) => {
    const ref = db.collection(`Products/$(id)/inform/size`);
  };

  const { currentUser } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            setuserId(snapshot.data().uid);
          });
      } else {
        setuserId(null);
      }
    });
  }, []);

  db.collection("Products")
    .doc(id)
    .get()
    .then((snapshot) => {
      setImage(snapshot.data().ProductImage);
      setName(snapshot.data().ProductName);
      setContent(snapshot.data().ProductContent);
      setPrice(snapshot.data().ProductPrice);
      setSize(snapshot.data().ProductSizes);
      setColor(snapshot.data().ProductColor);
    });
  for (var i = 0; i < Size.length; i++) {
    sizes[i] = Size[i];
  }
  for (var i = 0; i < Color.length; i++) {
    colors[i] = Color[i];
  }
  var Qty = 1;
  let Product;
  const cartHandler = (e) => {
    e.preventDefault();
    if (userColor && userSize != "") {
      db.collection(`SignedUpUsersData/${currentUser.uid}/Cart`)
        .doc(Name)
        .set({
          ProductName: Name,
          PricePrice: Price,
          ProductImage: Image,
          ProductSize: userSize,
          ProductQty: Qty,
          ProductColor: userColor,
        })
        .then(history.push("/"));
    }
  };
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
            height: "75vh",
            paddingBottom: "5%",
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
                <b>color</b> &nbsp;｜
                {colors.map((item) => (
                  <span>{item}/</span>
                ))}
                <br />
              </span>
              <span>
                <b>size</b> &nbsp;&nbsp;&nbsp;｜
                {sizes.map((item) => (
                  <span>{item}/</span>
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
                onChange={(e) => setUserColor(e.currentTarget.value)}
                // value={IsCategory}
              >
                <option value="0" disabled selected hidden>
                  COLOR
                </option>
                {colors.map((item) => (
                  <option>{item}</option>
                ))}
              </select>

              <select
                style={{
                  width: "80%",
                  height: "5vh",
                  borderColor: "black",
                  marginTop: "2%",
                }}
                placeholder="SIZE"
                onChange={(e) => setUserSize(e.currentTarget.value)}
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
                  onClick={(e) => {
                    cartHandler(e);
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
      <div>
        <div style={{ marginTop: "5%", marginBottom: "5%" }}>
          <img
            src={Image[1]}
            width="50%"
            height="80%"
            style={{
              maxHeight: "500px",
              marginLeft: "25%",
              border: "1px solid",
            }}
          />
          <div style={{ marginTop: "5%", width: "50%", marginLeft: "25%" }}>
            <a>{Content}</a>
          </div>
        </div>
        <div style={{ marginBottom: "5%" }}>
          <img
            src={Image[2]}
            width="50%"
            height="100%"
            style={{
              marginLeft: "25%",
              border: "1px solid",
            }}
          />
        </div>
      </div>
    </>
  );
}
