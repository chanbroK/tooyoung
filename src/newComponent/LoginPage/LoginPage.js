// import React, { useState } from "react";
// import { auth } from "../../Config/Config";
// import { Link } from "react-router-dom";

// export const LoginPage = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const login = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         setEmail("");
//         setPassword("");
//         setError("");
//         props.history.push("/");
//       })
//       .catch((err) => setError(err.message));
//   };

//   return (
//     <div className="container">
//       <br />
//       <h2>Login</h2>
//       <br />
//       <form autoComplete="off" className="form-group" onSubmit={login}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           className="form-control"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />
//         <br />
//         <button type="submit" className="btn btn-success btn-md mybtn">
//           LOGIN
//         </button>
//       </form>
//       {error && <span className="error-msg">{error}</span>}
//       <br />
//       <span>
//         Don't have an account? Register
//         <Link to="signup"> Here</Link>
//       </span>
//     </div>
//   );
// };

import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth, currentUser } from "../../Config/AuthContext";
import { Link, useHistory } from "react-router-dom";
import InsideNav from "../NavBar/InsideNav";
export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);

      history.push("/");
    } catch {
      setError("로그인에 실패하셨습니다.");
    }
    setLoading(false);
  }
  return (
    <>
      <InsideNav />

      <Card style={{ paddingTop: "10%" }}>
        <Card.Body style={{ textAlign: "center" }}>
          <span className="text-center mb-4" style={{ fontSize: "2em" }}>
            <b>투영</b>에 오신것을 <br />
            환영합니다{" "}
          </span>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form
            style={{
              alignItems: "center",
              maxWidth: "400px",
              marginLeft: "50%",
              transform: "translate(-50%)",
              paddingTop: "2%",
            }}
            onSubmit={handleSubmit}
          >
            <Form.Group id="email">
              <Form.Control
                type="email"
                ref={emailRef}
                required
                placeholder="ID"
                style={{
                  borderTop: "0px",
                  borderLeft: "0px",
                  borderRight: "0px",
                  borderRadius: "0px",
                }}
              />
            </Form.Group>
            <br />
            <Form.Group id="password">
              <Form.Control
                type="password"
                ref={passwordRef}
                required
                placeholder="PW"
                style={{
                  borderTop: "0px",
                  borderLeft: "0px",
                  borderRight: "0px",
                  borderRadius: "0px",
                }}
              />
            </Form.Group>
            <br />
            <br />
            <Button
              className="w-100"
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: "#111",
                borderColor: "#111",
                height: "4vh",
              }}
            >
              LOGIN
            </Button>
            <Link to="./signup">
              <Button
                className="w-100"
                disabled={loading}
                style={{
                  backgroundColor: "#AFAFAF",
                  borderColor: "#AFAFAF",
                  height: "4vh",
                  marginTop: "2%",
                }}
              >
                JOIN
              </Button>
            </Link>
            <Button
              className="w-100"
              disabled={loading}
              style={{
                backgroundColor: "#AFAFAF",
                borderColor: "#AFAFAF",
                height: "4vh",
                marginTop: "2%",
              }}
            >
              ID 찾기
            </Button>
            <Button
              className="w-100"
              disabled={loading}
              style={{
                backgroundColor: "#AFAFAF",
                borderColor: "#AFAFAF",
                height: "4vh",
                marginTop: "2%",
              }}
            >
              PW 찾기
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
