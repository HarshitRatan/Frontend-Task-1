import { Button, Checkbox, ConfigProvider, Row } from "antd";
import React from "react";
import TextField from "../../../components/inputs/TextField";

const YesOrNo = (props: any) => {
  const { handleDeleteQuestion, handleSaveQuestion, value, setValue } = props;
  return (
    <Row>
      <TextField
        label="Question"
        placeholder="Type Here..."
        value={value}
        setValue={setValue}
      />

      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "green",
            },
          }}
        >
          <Checkbox
            style={{
              color: " #000",
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            Disqualify candidate if the answer is no
          </Checkbox>
        </ConfigProvider>
      </Row>

      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          type="text"
          style={{
            color: "#A80000",
            fontFamily: "Poppins",
            fontSize: "0.9rem",
            fontStyle: "normal",
            fontWeight: "600",
          }}
          onClick={handleDeleteQuestion}
        >
          ❌ Delete question
        </Button>
        <Button
          type="primary"
          style={{
            borderRadius: "5px",
            background: "#087B2F",
            width: "4.5rem",
            height: "2.2rem",
          }}
          onClick={handleSaveQuestion}
        >
          Save
        </Button>
      </Row>
    </Row>
  );
};

export default YesOrNo;
