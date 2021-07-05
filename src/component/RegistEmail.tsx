import React from "react";
import * as saveEmail from "../util/email";
const RegistEmail = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const reasonRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (emailRef.current && nameRef.current && phoneRef.current && reasonRef.current) {
          saveEmail.saveToFireStore(
            emailRef.current.value,
            nameRef.current.value,
            reasonRef.current.value,
            phoneRef.current.value
          );
        }
        emailRef.current.value = "";
        nameRef.current.value = "";
        reasonRef.current.value = "";
        phoneRef.current.value = "";
      }}
    >
      <input type="submit" value="등록" />
      <input type="text" ref={nameRef} />
      <input type="text" ref={emailRef} />
      <input type="text" ref={phoneRef} />
      {/* 구독 or 협업 */}
      <input type="text" ref={reasonRef} />
    </form>
  );
};

export default RegistEmail;
