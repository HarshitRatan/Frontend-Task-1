import React from "react";
import Header from "../../components/header/Header";
import ImageUpload from "./imageUpload/ImageUpload";
import { Button, Col, Row } from "antd";
import PersonalInformation from "./personalInformation/PersonalInformation";
import Profile from "./profile/Profile";
import AdditionalQuestions from "./additionalQuestions/AdditionalQuestions";
import AddQuestion from "./addQuestion/AddQuestion";

const Home = () => {
  const handlePostRequest = () => {
    const postData = {
      data: {
        id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        type: "applicationForm",
        attributes: {
          profile: {
            education: {
              mandatory: educationMandatory,
              show: educationShow,
            },
            experience: {
              mandatory: experienceMandatory,
              show: experienceShow,
            },
            resume: {
              mandatory: resumeMandatory,
              show: resumeShow,
            },
            profileQuestions: profileQuestions,
          },
        },
      },
    };
    console.log("Post Data :: ", postData);
    console.log("String data :: ", JSON.stringify(postData));
  };

  // Profile Section
  // Education
  const [educationMandatory, setEducationMandatory] = React.useState(false);
  const [educationShow, setEducationShow] = React.useState(false);
  // experience
  const [experienceMandatory, setExperienceMandatory] = React.useState(false);
  const [experienceShow, setExperienceShow] = React.useState(false);
  // Resume
  const [resumeMandatory, setResumeMandatory] = React.useState(false);
  const [resumeShow, setResumeShow] = React.useState(false);
  // profileQuestions
  const [profileQuestions, setProfileQuestions] = React.useState<Array<Object>>(
    []
  );

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
          <AddQuestion />
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
          <Profile
            educationMandatory={educationMandatory}
            setEducationMandatory={setEducationMandatory}
            educationShow={educationShow}
            setEducationShow={setEducationShow}
            experienceMandatory={experienceMandatory}
            setExperienceMandatory={setExperienceMandatory}
            experienceShow={experienceShow}
            setExperienceShow={setExperienceShow}
            resumeMandatory={resumeMandatory}
            setResumeMandatory={setResumeMandatory}
            resumeShow={resumeShow}
            setResumeShow={setResumeShow}
          />
          <AddQuestion
            allQuestion={profileQuestions}
            setAllQuestion={setProfileQuestions}
          />
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

      <Row style={{ marginTop: "5rem", marginBottom: "10rem" }}>
        <Col
          span={10}
          style={{
            backgroundColor: "white",
            borderRadius: "1.2rem",
            boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
          }}
        >
          <Button
            type="primary"
            block
            style={{
              backgroundColor: "rgb(0, 99, 91)",
              color: "white",
              fontWeight: 500,
              borderRadius: "1.2rem",
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
            }}
            onClick={handlePostRequest}
          >
            Save and Next
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
