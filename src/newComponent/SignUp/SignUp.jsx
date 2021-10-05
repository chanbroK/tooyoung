import React, { useState } from "react";
import { auth, db } from "../../Config/Config";
import { Link, useLocation } from "react-router-dom";
import InsideNav from "../NavBar/InsideNav";
import { Button } from "react-bootstrap";

const Categoly = [
  { key: 1, value: "남자" },
  { key: 2, value: "여자" },
];

export const SignUp = (props) => {
  // defining state
  const [IsCategory, setIsCategory] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Birth, setBirth] = useState("");
  const [Gender, setGender] = useState("");
  const [phonNum, setPhonNum] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const checked0 = location.state.checked0;
  const checked1 = location.state.checked1;
  const checked2 = location.state.checked2;
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
  console.log(checked0, checked1, checked2);
  return (
    <>
      <InsideNav />
      <div
        className="container"
        style={{
          paddingTop: "160px",
          width: "70%",
          marginLeft: "30%",
        }}
      >
        <h2>회원가입</h2>
        <br />
        <form
          autoComplete="off"
          className="form-group"
          onSubmit={signup}
          style={{ width: "50%" }}
        >
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ borderColor: "black" }}
          />
          <br />
          <label htmlFor="passowrd">비밀번호</label>
          <input
            type="password"
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ borderColor: "black" }}
          />
          <br />
          <label htmlFor="name">이름</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{ borderColor: "black" }}
          />
          <br />
          <label htmlFor="name">생년월일</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="ex:20001212"
            onChange={(e) => setBirth(e.target.value)}
            value={name}
            style={{ borderColor: "black" }}
          />
          <br />
          <label htmlFor="name">성별</label>
          <br />
          <select
            style={{
              width: "100%",
              height: "5vh",
              borderColor: "black",
              borderRadius: "5px",
            }}
            onChange={(e) => setIsCategory(e.currentTarget.value)}
            value={IsCategory}
          >
            {Categoly.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label htmlFor="name">전화번호</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="'-'를 생략하고 적어주세요"
            onChange={(e) => setPhonNum(e.target.value)}
            value={name}
            style={{ borderColor: "black" }}
          />
          <br />

          <Button
            type="submit"
            style={{
              backgroundColor: "black",
              borderColor: "black",
              height: "4vh",
              marginTop: "2%",
              width: "20vw",
              marginLeft: "20%",
            }}
          >
            가입하기
          </Button>
        </form>
        {error && <span className="error-msg">{error}</span>}
        <br />
      </div>
    </>
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
