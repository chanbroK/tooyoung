import React from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";

export default function FileUpload() {
  const drophandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    axios.post("api/product/image", formData, config).then((response) => {
      if (response.data.success) {
      } else {
        alert("파일전송에 실패했습니다.");
      }
    });
  };

  return (
    <div>
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: "300px",
                height: "240px",
                border: "1px solid",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <AiOutlinePlus style={{ fontSize: "3rem" }} />
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
