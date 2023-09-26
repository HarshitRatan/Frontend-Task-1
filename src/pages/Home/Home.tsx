import React from "react";
import Header from "../../components/header/Header";
import ImageUpload from "./imageUpload/ImageUpload";
import { Col, Row } from "antd";
import PersonalInformation from "./personalInformation/PersonalInformation";
import Profile from "./profile/Profile";
import AdditionalQuestions from "./additionalQuestions/AdditionalQuestions";

const Home = () => {
  return (
    <div>
      <Header />
      <Row style={{ marginTop: "5rem" }}>
        <Col
          span={10}
          style={{
            backgroundColor: "white",
            borderRadius: "1.2rem",
            boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
          }}
        >
          <ImageUpload />
        </Col>
      </Row>

      <Row style={{ marginTop: "5rem" }}>
        <Col
          span={10}
          style={{
            backgroundColor: "white",
            borderRadius: "1.2rem",
            boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
          }}
        >
          <PersonalInformation />
        </Col>
      </Row>

      <Row style={{ marginTop: "5rem" }}>
        <Col
          span={10}
          style={{
            backgroundColor: "white",
            borderRadius: "1.2rem",
            boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
          }}
        >
          <Profile />
        </Col>
      </Row>

      <Row style={{ marginTop: "5rem" }}>
        <Col
          span={10}
          style={{
            backgroundColor: "white",
            borderRadius: "1.2rem",
            boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
          }}
        >
          <AdditionalQuestions />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
