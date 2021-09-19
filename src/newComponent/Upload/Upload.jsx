import { title } from "process";
import React, { useState } from "react";
import DropProduct from "../utils/FileUpload";

const Categoly = [
  { key: 1, value: "상의" },
  { key: 2, value: "하의" },
  { key: 3, value: "악세사리" },
  { key: 4, value: "모자" },
  { key: 5, value: "겉옷" },
];

export default function Upload() {
  const [Titile, setTitile] = useState("");
  const [ConTent, setConTent] = useState("");
  const [Price, setPrice] = useState("");
  const [Images, setImages] = useState([]);
  const [IsCategory, setIsCategory] = useState(1);
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <form>
        <DropProduct />
        <br />
        <br />
        <div style={{ textAling: "left" }}>
          <label>상품명</label>
          <br />
          <input
            onChange={(e) => setTitile(e.currentTarget.value)}
            value={Titile}
          />
        </div>
        <br />
        <br />
        <label>설명</label>
        <br />
        <input
          onChange={(e) => setConTent(e.currentTarget.value)}
          value={ConTent}
        />
        <br />
        <br />
        <label>가격</label>
        <br />
        <input
          type="nuber"
          onChange={(e) => setPrice(e.currentTarget.value)}
          value={Price}
        />
        <br />
        <br />
        <select
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
        <button>확인</button>
      </form>
    </div>
  );
}
