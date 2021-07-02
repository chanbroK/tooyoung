import React from "react";
import { db } from "./firebase";
const RegistEmail = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (emailRef.current) {
          db.collection("Email").add({
            email: emailRef.current.value,
          });
          console.log("done");
        }
        emailRef.current.value = "";
      }}
    >
      <input type="submit" value="등록" />
      <input type="text" ref={emailRef} />
    </form>
  );
};

export default RegistEmail;
