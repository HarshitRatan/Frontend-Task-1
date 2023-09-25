import React from "react";
import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { UploadOutlined } from "@ant-design/icons";

const ImageUpload = () => {
  const [file, setFile] = React.useState("");
  const handleChange = (e: any) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Space
      style={{
        borderRadius: "5px",
        border: "1px dashed #000",
        boxShadow: "3px 3px 9px 0px rgba(190, 190, 190, 0.13)",
        height: "15rem",
        width: "30rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "5rem",
      }}
    >
      {file.length === 0 && (
        <>
          <UploadOutlined style={{ fontSize: "3rem" }} />
          <Title
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            Upload cover image
          </Title>
          <Title
            style={{
              color: "#979797",
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            16:9 ratio is recommended. Max image size 1mb
          </Title>
          <input type="file" onChange={handleChange} />
        </>
      )}
      {file.length > 0 && (
        <>
          <img
            src={file}
            alt="coding---123456"
            style={{
              height: "15rem",
              width: "30rem",
            }}
          />
        </>
      )}
    </Space>
  );
};

export default ImageUpload;
