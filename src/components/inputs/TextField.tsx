import React from "react";
import { Input } from "antd";
const TextField = (props: any) => {
  const { label, placeholder } = props;
  return (
    <div style={{ marginTop: "1rem", width: "100%" }}>
      <label
        htmlFor="inputField"
        style={{
          color: "#000000bf",
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        {label}
      </label>
      <Input
        style={{
          width: "100%",
          height: "3.5rem",
          fontWeight: 600,
          marginTop: "1rem",
        }}
        placeholder={placeholder}
      />
      ;
    </div>
  );
};

export default TextField;
