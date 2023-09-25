import React from "react";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";

const Header: React.FC = () => {
  return (
    <>
      <Row
        style={{
          height: "7rem",
          marginTop: "5rem",
          backgroundColor: "#FFF",
          borderRadius: "0.5rem",
          boxShadow: "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "1.2rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Program Details
          </Title>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00635B",
          }}
        >
          <Title
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "1.2rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Application Form
          </Title>
        </Col>
        <Col
          span={6}
          style={{
            borderRight: "1px solid #C4C4C4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "1.2rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Workflow
          </Title>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "1.2rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Preview
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default Header;
