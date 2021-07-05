import React from "react";
import * as saveEmail from "../util/email";
const SaveEmail = () => {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        saveEmail.saveToExcel();
      }}
    >
      저장
    </button>
  );
};

export default SaveEmail;
