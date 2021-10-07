import React, { useState } from "react";

export default function Test() {
  const [size, setsize] = useState("");
  const show = () => {
    const sizes = size.split(",");
    console.log(sizes);
  };

  return (
    <div>
      <input onChange={(e) => setsize(e.currentTarget.value)} />

      <button className="btn btn-success btn-md mybtn" onClick={show()}>
        확인
      </button>
    </div>
  );
}
