import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const FormQuestionBlock = () => {
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
          }}
        >
          Paragraph
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
              }}
            >
              Please tell me about yourself in less than 500 words
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
            >
              <EditOutlined />
            </Button>
          </Col>
        </Row>
      </div>
      <Divider />
    </>
  );
};

export default FormQuestionBlock;
