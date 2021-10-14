import { title } from "process";
import React, { useState } from "react";
import { storage, db } from "../../Config/Config";

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
  const [Urls, setUrls] = useState([]);
  const [IsCategory, setIsCategory] = useState(1);
  const [isError, setIsError] = useState("");
  const [SizeforSplit, setSizforSplit] = useState("");
  const [Size, setSize] = useState([]);
  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];

  const productImageHandler = (e) => {
    for (let i = 0; i < e.currentTarget.files.length; i++) {
      const newImage = e.currentTarget.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const splitHandler = () => {
    setSize(SizeforSplit.split(","));
  };

  const addProduct = (e) => {
    e.preventDefault();
    const promise = [];
    setSize(SizeforSplit.split(","));
    Images.map((image) => {
      const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
      promise.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (err) => {
          setIsError(err.message);
        },
        async () => {
          await storage
            .ref("product-images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrls((prevState) => [...prevState, url]);
              console.log(url, Size);
            });
        }
      );
    });
    db.collection("Products")
      .add({
        ProductImage: Urls,
        ProductName: Titile,
        ProductPrice: Number(Price),
        ProductContent: ConTent,
        ProductSizes: Size,
      })
      .then(() => {
        setUrls([]);
        setConTent("");
        setImages("");
        setIsError("");
        setPrice(0);
        setSizforSplit("");
        document.getElementById("").value = "";
        alert("upload!!");
      })
      .catch((err) => setIsError(err.message));
    console.log(Titile, ConTent, Price, IsCategory);
    Promise.all(promise)
      .then(() => alert("All Images upload"))
      .catch((err) => console.log(err));
  };
  console.log(Images);
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
