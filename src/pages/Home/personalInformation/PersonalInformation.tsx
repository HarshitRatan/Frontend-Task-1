import { Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import TextField from "../../../components/textfield/TextField";

const PersonalInformation = () => {
  return (
    <>
      <Title
        style={{
          color: "#000",
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: 600,
          borderRadius: "1.2rem 1.2rem  0px 0px",
          background: "#D0F7FA",
          marginTop: 0,
          padding: "1.2rem",
        }}
      >
        Personal Information
      </Title>
      <Space
        style={{
          backgroundColor: "white",
          borderRadius: "1.2rem",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: "column",
          border: "2px solid black",
        }}
      >
        <TextField />
      </Space>
    </>
  );
};

export default PersonalInformation;
