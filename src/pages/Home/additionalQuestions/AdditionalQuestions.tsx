import { Button, Divider, Row, Select, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import FormQuestionBlock from "../../../components/formQuestionBlock/FormQuestionBlock";
import ParagraphQuestion from "../questions/ParagraphQuestion";
import YesOrNo from "../questions/YesOrNo";
import ShortAnswer from "../questions/ShortAnswer";
import DateQuestion from "../questions/DateQuestion";
import NumberQuestion from "../questions/NumberQuestion";
import FileQuestion from "../questions/FileQuestion";
import VideoQuestion from "../questions/VideoQuestion";

const AdditionalQuestions = () => {
  const [allQuestion, setAllQuestion] = React.useState([
    {
      question: "please tell me about yourself in less than 500 words",
      type: "paragraph",
    },
  ]);

  const [questionType, setQuestionType] = React.useState("default");
  const [question, setQuestion] = React.useState("");
  const [isAddQuestionOpen, setIsAddQuestionOpen] = React.useState(false);

  const setAllValueToInitialValue = () => {
    setQuestionType("default");
    setQuestion("");
    setIsAddQuestionOpen(false);
  };

  const handleQuestionChange = (value: string) => {
    console.log(`selected ${value}`);
    setQuestionType(value);
  };

  const handleDeleteQuestion = () => {
    console.log("handle Delete");
    setIsAddQuestionOpen(false);
    setQuestionType("default");
  };

  const handleSaveQuestion = () => {
    const newValue = [...allQuestion, { type: questionType, question }];
    setAllQuestion(newValue);
    setAllValueToInitialValue();
  };

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
        Additional Questions
      </Title>
      <Space
        style={{
          borderRadius: "1.2rem",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        {allQuestion.length > 0 &&
          allQuestion.map((value, index) => (
            <FormQuestionBlock key={index} {...value} />
          ))}

        {isAddQuestionOpen && (
          <Row>
            <label
              style={{
                color: "#000000bf",
                fontFamily: "Poppins",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: "600",
              }}
            >
              Type of Question
            </label>
            <Select
              defaultValue="default"
              style={{ width: "100%", height: "3.5rem", marginTop: "1rem" }}
              onChange={handleQuestionChange}
              listHeight={500}
              options={[
                { value: "default", label: "Type of Question", disabled: true },
                { value: "paragraph", label: "Paragraph" },
                { value: "short-answer", label: "Short answer" },
                { value: "yes-no", label: "Yes/No" },
                { value: "dropdown", label: "Dropdown" },
                { value: "mcq", label: "Multiple choice" },
                { value: "date", label: "Date" },
                { value: "number", label: "Number" },
                { value: "file", label: "File upload" },
                { value: "video", label: "Video question" },
              ]}
            />
          </Row>
        )}
        {isAddQuestionOpen && questionType === "paragraph" && (
          <ParagraphQuestion
            handleDeleteQuestion={handleDeleteQuestion}
            handleSaveQuestion={handleSaveQuestion}
            value={question}
            setValue={setQuestion}
          />
        )}
        {isAddQuestionOpen && questionType === "short-answer" && (
          <ShortAnswer
            handleDeleteQuestion={handleDeleteQuestion}
            handleSaveQuestion={handleSaveQuestion}
            value={question}
            setValue={setQuestion}
          />
        )}
        {isAddQuestionOpen && questionType === "yes-no" && (
          <YesOrNo
            handleDeleteQuestion={handleDeleteQuestion}
            handleSaveQuestion={handleSaveQuestion}
            value={question}
            setValue={setQuestion}
          />
        )}
        {isAddQuestionOpen && questionType === "dropdown" && <>dropdown</>}
        {isAddQuestionOpen && questionType === "mcq" && <>mcq</>}
        {isAddQuestionOpen && questionType === "date" && (
          <DateQuestion
            handleDeleteQuestion={handleDeleteQuestion}
            handleSaveQuestion={handleSaveQuestion}
            value={question}
            setValue={setQuestion}
          />
        )}
        {isAddQuestionOpen && questionType === "number" && (
          <NumberQuestion
            handleDeleteQuestion={handleDeleteQuestion}
            handleSaveQuestion={handleSaveQuestion}
            value={question}
            setValue={setQuestion}
          />
        )}
        {isAddQuestionOpen && questionType === "file" && (
          <FileQuestion
            handleDeleteQuestion={handleDeleteQuestion}
            handleSaveQuestion={handleSaveQuestion}
            value={question}
            setValue={setQuestion}
          />
        )}
        {isAddQuestionOpen && questionType === "video" && (
          <VideoQuestion
            handleDeleteQuestion={handleDeleteQuestion}
            handleSaveQuestion={handleSaveQuestion}
          />
        )}

        <Divider />
        <Button
          type="text"
          style={{
            color: " #000",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "600",
          }}
          onClick={() => {
            setIsAddQuestionOpen(true);
          }}
          disabled={isAddQuestionOpen}
        >
          ➕ Add a question
        </Button>
      </Space>
    </>
  );
};

export default AdditionalQuestions;