import React from "react";
import Dropzone from "react-dropzone";
import { AiOutlinePlus } from "react-icons/ai";
export default function FileUpload() {
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
