import React, { useState, useEffect } from "react";
import logo from "../../component/images/투영 로고.png";
import { Link } from "react-router-dom";
import { auth, db } from "../../Config/Config";
import { useAuth } from "../../Config/AuthContext";
import Logout from "../Logout/Logout";
import { BiShoppingBag } from "react-icons/bi";
export default function NavB() {
  const [LoginUser, setLoginUser] = useState(null);
  const { currentUser } = useAuth();
  const userInfo = useAuth().userInfo;
  const [user, setuser] = useState(null);
  const [uId, setuId] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            setuser(snapshot.data().Name);
          });
      } else {
        setuser(null);
      }
    });
  }, []);

  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: "120px",
        backgroundColor: "white",
        borderWidth: 10,
        borderBottom: "1px solid rgb(212, 212, 212)",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          style={{
            position: "absolute",
            left: "50%",
            width: "80px",
            height: "80px",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </Link>
      {currentUser ? (
        <>
          <div
            className="container"
            style={{
              position: "absolute",
              left: "80%",
              top: "70%",
              transform: "translate(-50%,-50%)",
              width: "15%",
            }}
          >
            <div className="row">
              <span
                className="col-md-4"
                style={{ marginTop: "1%", marginRight: "-7%" }}
              >
                {user}{" "}
              </span>
              <BiShoppingBag
                className="col-md-4"
                style={{ fontSize: "30px" }}
              />
              <Logout />
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/login">
            <span
              style={{
                position: "absolute",
                left: "85%",
                top: "70%",
                transform: "translate(-50%,-50%)",
              }}
            >
              LOGIN
            </span>
          </Link>

          <Link to="signup">
            <span
              style={{
                position: "absolute",
                left: "90%",
                top: "70%",
                transform: "translate(-50%,-50%)",
              }}
            >
              JOIN
            </span>
          </Link>
        </>
      )}
    </nav>
  );
}
