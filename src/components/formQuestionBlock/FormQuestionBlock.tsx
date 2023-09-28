import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Select } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect } from "react";
import ParagraphQuestion from "../../pages/Home/questions/ParagraphQuestion";

const FormQuestionBlock = (props: any) => {
  const { allQuestion, setAllQuestion } = props;
  // Flag
  const [isEditing, setIsEditing] = React.useState(false);

  //Form Data
  const [id, setId] = React.useState(null);
  const [questionType, setQuestionType] = React.useState("default");
  const [question, setQuestion] = React.useState("");
  const [disqualify, setDisqualify] = React.useState(false);
  const [choices, setChoices] = React.useState<Array<String>>([]);
  const [other, setOther] = React.useState(false);
  const [maxChoices, setMaxChoices] = React.useState(1);

  const handleEditQuestion = () => {
    console.log(" Handle edit with ID :: ", id);
    const editedQuestionList = allQuestion.map((q: any) => {
      if (id === q.id) {
        return {
          id,
          type: questionType,
          question,
          disqualify,
          choices,
          other,
          maxChoice: maxChoices,
        };
      }
      return q;
    });
    setAllQuestion(editedQuestionList);
    setTimeout(() => {
      setIsEditing(false);
    }, 500);
  };

  const handleDeleteQuestion = () => {
    const editedQuestionList = allQuestion.filter((q: any) => {
      return q.id !== id;
    });
    setAllQuestion(editedQuestionList);
  };

  const handleQuestionChange = (value: string) => {
    setQuestionType(value);
  };
  useEffect(() => {
    const questionForEdit = allQuestion.filter((value: any) => value.id === id);
    setQuestionType(questionForEdit[0]?.type);
    setChoices(questionForEdit[0]?.choices);
    setDisqualify(questionForEdit[0]?.disqualify);
    setMaxChoices(questionForEdit[0]?.maxChoice);
    setOther(questionForEdit[0]?.other);
    setQuestion(questionForEdit[0]?.question);
  }, [allQuestion, id]);
  return (
    <>
      <div>
        <label
          htmlFor="inputField"
          style={{
            color: "#979797",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          {props.type}
        </label>
        <Row>
          <Col
            span={20}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Title
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              {props.question}
            </Title>
          </Col>
          <Col
            span={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              type="text"
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
              }}
              onClick={() => {
                setId(props.id);
                setIsEditing(true);
              }}
            >
              <EditOutlined />
            </Button>
          </Col>
        </Row>
      </div>
      <Divider />
      {isEditing && (
        <div style={{ marginBottom: "1rem" }}>
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
              value={questionType}
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
          {questionType === "paragraph" && (
            <ParagraphQuestion
              handleDeleteQuestion={handleDeleteQuestion}
              handleSaveQuestion={handleEditQuestion}
              value={question}
              setValue={setQuestion}
            />
          )}
        </div>
      )}
    </>
  );
};

export default FormQuestionBlock;
