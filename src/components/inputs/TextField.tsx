import React, { useEffect } from "react";
import { Input } from "antd";
import { message } from "antd";

const TextField = (props: any) => {
  const { label, placeholder, value, setValue, error, errorMessage } = props;
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: errorMessage,
      });
    }
  }, [error, messageApi, errorMessage]);

  return (
    <div style={{ marginTop: "1rem", width: "100%" }}>
      {contextHolder}
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
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
      />
      ;
    </div>
  );
};

export default TextField;
