import { title } from "process";
import React, { useState } from "react";
import DropProduct from "../utils/FileUpload";
import { storage, db } from "../../Config/Config";
import { InputGroup } from "react-bootstrap";

const Categoly = [
  { key: 1, value: "상의" },
  { key: 2, value: "하의" },
  { key: 3, value: "악세사리" },
  { key: 4, value: "모자" },
  { key: 5, value: "겉옷" },
];

// function pasteIntoInput(el, text) {
//   el.focus();
//   if (
//     typeof el.selectionStart == "number" &&
//     typeof el.selectionEnd == "number"
//   ) {
//     var val = el.value;
//     var selStart = el.selectionStart;
//     el.value = val.slice(0, selStart) + text + val.slice(el.selectionEnd);
//     el.selectionEnd = el.selectionStart = selStart + text.length;
//   } else if (typeof document.selection != "undefined") {
//     var textRange = document.selection.createRange();
//     textRange.text = text;
//     textRange.collapse(false);
//     textRange.select();
//   }
// }

// function handleEnter(evt) {
//   if (evt.keyCode == 13 && evt.shiftKey) {
//     if (evt.type == "keypress") {
//       pasteIntoInput(this, "\n");
//     }
//     evt.preventDefault();
//   }
// }

export default function Upload() {
  const [Titile, setTitile] = useState("");
  const [ConTent, setConTent] = useState("");
  const [Price, setPrice] = useState(0);
  const [Images, setImages] = useState([]);
  const [IsCategory, setIsCategory] = useState(1);
  const [isError, setIsError] = useState("");
  const [SizeforSplit, setSizforSplit] = useState("");
  const [Size, setSize] = useState([]);
  const types = ["images/jpeg", "image/png"];

  const productImageHandler = (e) => {
    let selectedFile = e.currentTarget.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImages([...Images, selectedFile]);
      setIsError("");
    } else {
      setImages(null);
      setIsError("Pleas select the image type jpeg/png");
    }
  };

  const splitHandler = () => {
    setSize(SizeforSplit.split(","));
  };
  const addProduct = (e) => {
    e.preventDefault();
    //console.log(Titile, ConTent, Price, IsCategory);
    const uploadTask = storage.ref(`product-images/${Images.name}`).put(Images);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        setIsError(err.message);
      },
      () => {
        storage
          .ref("product-images")
          .child(Images.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                ProductImage: url,
                ProductName: Titile,
                ProductPrice: Number(Price),
                ProductContent: ConTent,
                ProductSizes: Array(Size),
              })
              .then(() => {
                setConTent("");
                setImages("");
                setIsError("");
                setPrice(0);
                setSizforSplit("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setIsError(err.message));
          });
      }
    );
  };

  return (
    <div
      style={{ maxWidth: "700px", margin: "2rem auto" }}
      onSubmit={addProduct}
    >
      <form>
        <label>상품 이미지 </label>
        <br />
        <input
          type="file"
          multiple
          className="form-control"
          onChange={productImageHandler}
        />
        <br />
        <br />
        <div style={{ textAlign: "left" }}>
          <label>상품명</label>
          <br />
          <input
            className="form-control"
            onChange={(e) => setTitile(e.currentTarget.value)}
            value={Titile}
          />
        </div>
        <br />

        <label>설명</label>
        <br />
        <textarea
          style={{ width: "100%", height: "20vh" }}
          onChange={(e) => setConTent(e.currentTarget.value)}
          value={ConTent}
        ></textarea>
        <br />
        <br />
        <label>가격</label>
        <br />
        <input
          className="form-control"
          type="nuber"
          onChange={(e) => setPrice(e.currentTarget.value)}
          value={Price}
        />
        <br />
        <br />
        <input
          className="form-control"
          onChange={(e) => setSizforSplit(e.currentTarget.value)}
        />
        <br />
        <button onClick={splitHandler}> split</button>
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
        <button className="btn btn-success btn-md mybtn">확인</button>
      </form>
    </div>
  );
}
