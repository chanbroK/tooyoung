import React, { useState } from "react";
import { storage, db } from "../../Config/Config";

export default function BrandUpload() {
  const [Logo, setLogo] = useState(null);
  const [SubLogo, setSubLogo] = useState(null);
  const [BrandName, setBrandName] = useState("");
  const [ConTent, setConTent] = useState("");
  const [isError, setIsError] = useState("");
  const types = ["image/png", "image/jpeg"]; // image types

  const LogoImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setLogo(selectedFile);
      setIsError("");
    } else {
      setLogo(null);
      setIsError("Please select a valid image type (jpg or png)");
    }
  };
  const SubLogoImgHandler = (e) => {
    let selectedFile2 = e.target.files[0];
    if (selectedFile2 && types.includes(selectedFile2.type)) {
      setSubLogo(selectedFile2);
      setIsError("");
    } else {
      setSubLogo(null);
      setIsError("Please select a valid image type (jpg or png)");
    }
  };

  const addBrand = (e) => {
    e.preventDefault();
    const uploadLogoTask = storage.ref(`Brand-Image/${Logo.name}`).put(Logo);
    uploadLogoTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        setIsError(err.message);
      },
      () =>
        storage
          .ref("Brand-Image")
          .child(Logo.name)
          .getDownloadURL()
          .then((url) => {
            setLogo(url);
          })
    );

    // const uploadsubLogo = storage
    //   .ref(`Brand-Image/${SubLogo.name}`)
    //   .put(SubLogo);
    // uploadsubLogo.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   },
    //   (err) => {
    //     setIsError(err.message);
    //   },
    //   () =>
    //     storage
    //       .ref("Brand-Image")
    //       .child(SubLogo.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         setSubLogo(url);
    //       })
    // );

    db.collection("Brand")
      .add({
        BrandName: BrandName,
        BrandContent: ConTent,
        BrandLogo: Logo,
        // BrandSubImage: SubLogo,
      })
      .then(() => {
        setBrandName("");
        setConTent("");
        setLogo("");
        // setSubLogo("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }} onSubmit={addBrand}>
      <h1>Brand Upload</h1>
      <form>
        <label>브랜드 이름 </label>
        <input
          className="form-control"
          onChange={(e) => setBrandName(e.currentTarget.value)}
        />
        <br />
        <br />
        <textarea
          style={{ width: "100%", height: "20vh" }}
          onChange={(e) => setConTent(e.currentTarget.value)}
          value={ConTent}
        ></textarea>
        <br />
        <br />
        <label>브랜드 로고 </label>
        <input type="file" className="form-control" onChange={LogoImgHandler} />
        <br />
        <br />
        <label> 브랜드 서브 로고</label>
        <br />
        <input
          type="file"
          className="form-control"
          onchange={SubLogoImgHandler}
        />
        <br />
        <button>확인</button>
      </form>
    </div>
  );
}
