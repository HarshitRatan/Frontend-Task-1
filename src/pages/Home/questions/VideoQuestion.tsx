import React from "react";
import { Button, Col, Input, Row, Select } from "antd";
import TextField from "../../../components/inputs/TextField";
import TextArea from "antd/es/input/TextArea";

const VideoQuestion = (props: any) => {
  const { handleDeleteQuestion, handleSaveQuestion, value, setValue } = props;
  const [saveLoading, setSaveLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleQuestionChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Row>
        <TextField
          label="Question"
          placeholder="Type Here..."
          value={value}
          setValue={setValue}
          error={error}
          setError={setError}
          errorMessage="Question Can Not Be Empty"
        />
        <TextArea rows={4} placeholder="Description..." />
        <Row style={{ width: "100%", marginBottom: "1rem" }}>
          <Col
            span={16}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Input
              style={{
                width: "90%",
                height: "3.5rem",
                fontWeight: 600,
                marginTop: "1rem",
              }}
              placeholder="Max duration of video"
            />
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Select
              placeholder="in (sec/min)"
              style={{ width: "100%", height: "3.5rem", marginTop: "1rem" }}
              onChange={handleQuestionChange}
              listHeight={500}
              options={[
                { value: "default", label: "in (sec/min)", disabled: true },
                { value: "second", label: "Second" },
                { value: "minutes", label: "Minutes" },
              ]}
            />
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
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
            onClick={() => {
              setError(false);
              if (value) {
                setSaveLoading(true);
                setTimeout(() => {
                  handleSaveQuestion();
                  setSaveLoading(false);
                }, 1000);
              } else {
                setError(true);
              }
            }}
            loading={saveLoading}
          >
            Save
          </Button>
        </Row>
      </Row>
    </>
  );
};

export default VideoQuestion;
