import React, { useState } from "react";
import { auth, db } from "../../Config/Config";
import { Link } from "react-router-dom";

export const SignUp = (props) => {
  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // signup
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            props.history.push("/");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container">
      <br />
      <h2>Sign up</h2>
      <br />
      <form autoComplete="off" className="form-group" onSubmit={signup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="passowrd">Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          SUBMIT
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <br />
      <span>
        Already have an account? Login
        <Link to="login"> Here</Link>
      </span>
    </div>
  );
};

// import React, { useRef, useState } from "react";
// import { Card, Form, Button, Alert } from "react-bootstrap";
// import { useAuth, currentUser } from "../../Config/AuthContext";
// import { Link, useHistory } from "react-router-dom";
// export default function SignUp() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const passwordConfirmRef = useRef();
//   const nameRef = useRef();
//   const { signup } = useAuth();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();
//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("비밀번호가 일치하지 않습니다.");
//     }
//     try {
//       setLoading(true);
//       setError("");
//       await signup(
//         emailRef.current.value,
//         passwordRef.current.value,
//         nameRef.current.value
//       );
//       history.push("/");
//     } catch {
//       setError("회원가입에 실패했습니다.");
//     }
//     setLoading(false);
//   }
//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">sign up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form
//             style={{ alignItems: "center", maxWidth: "400px" }}
//             onSubmit={handleSubmit}
//           >
//             <Form.Group id="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" ref={nameRef} required />
//             </Form.Group>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control type="password" ref={passwordConfirmRef} required />
//             </Form.Group>
//             <Button className="w-100" type="submit" disabled={loading}>
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have account? <Link to="/login"> Login</Link>
//       </div>
//     </>
//   );
// }
