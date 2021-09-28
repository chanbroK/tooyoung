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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">LogIn </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form
            style={{ alignItems: "center", maxWidth: "400px" }}
            onSubmit={handleSubmit}
          >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button className="w-100" type="submit" disabled={loading}>
              LogIn
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password"> 비밀번호 찾기 </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        아이디가 없으신가요? <Link to="/signup"> Login</Link>
      </div>
    </>
  );
}
