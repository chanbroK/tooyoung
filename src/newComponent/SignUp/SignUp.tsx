import React, { useState } from "react";
import { auth, db } from "../../Config/Config";

export default function SignUp(props) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");

  const SignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((cred) => {
        db.collection("UserData")
          .doc(cred.user.uid)
          .set({
            Name: Name,
            Email: Email,
            Password: Password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            props.history.push("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
    // console.log("form submit");
    // console.log(Name, Email, Password);
  };

  return (
    <div className="container">
      <br />
      <h2>SignUp</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={SignUp}>
        <label htmlFor="Name">Name</label>
        <br />
        <input
          type="text"
          className="Form-control"
          required
          onChange={(e) => setName(e.currentTarget.value)}
          value={Name}
        />
        <br />
        <label htmlFor="Email">Email</label>
        <br />
        <input
          type="email"
          className="Form-control"
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={Email}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <br />
        <input
          type="password"
          className="Form-control"
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={Password}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-success btn-md">
          가입하기
        </button>
      </form>
    </div>
  );
}
