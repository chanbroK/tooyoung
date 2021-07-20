import React from "react";
import * as saveEmail from "../util/email";
const SaveEmail = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        saveEmail.saveToExcel();
      }}
    >
      Save Contact Email To Excel
    </button>
  );
};

export default SaveEmail;
