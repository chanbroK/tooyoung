import React from "react";
import * as saveEmail from "../util/email";
const RegistEmail = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const reasonRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (emailRef.current && nameRef.current && phoneRef.current) {
          saveEmail.saveToFireStore(
            emailRef.current.value,
            nameRef.current.value,
            phoneRef.current.value,
            "구독"
          );
        }
        emailRef.current.value = "";
        nameRef.current.value = "";
        phoneRef.current.value = "";
      }}
    >
      <input type="submit" value="등록" />
      <label>
        이름:
        <input type="text" ref={nameRef} />
      </label>

      <label>
        이메일:
        <input type="text" ref={emailRef} />
      </label>
      <label>
        연락처:
        <input type="text" ref={phoneRef} />
      </label>
    </form>
  );
};

export default RegistEmail;
