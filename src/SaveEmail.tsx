import React from "react";
import { db } from "./firebase";

const SaveEmail = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        db.collection("Email")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              console.log(doc.data().email);
            });
          });
      }}
    >
      저장
    </button>
  );
};

export default SaveEmail;
