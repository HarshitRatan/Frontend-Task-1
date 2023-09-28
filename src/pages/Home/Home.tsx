import React from "react";
import Header from "../../components/header/Header";
import ImageUpload from "./imageUpload/ImageUpload";
import { Button, Col, Row, notification } from "antd";
import PersonalInformation from "./personalInformation/PersonalInformation";
import Profile from "./profile/Profile";
import AdditionalQuestions from "./additionalQuestions/AdditionalQuestions";
import AddQuestion from "./addQuestion/AddQuestion";
import type { NotificationPlacement } from "antd/es/notification/interface";

const Home = () => {
  // Open Notification
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message:
        "Data Submitted and Printed On Console. Check Console For More Details :)",
      placement,
    });
  };

  const handlePostRequest = () => {
    const postData = {
      data: {
        id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        type: "applicationForm",
        attributes: {
          coverImage: coverImageURL,
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
          personalInformation: {
            firstName: {
              internalUse: false,
              show: true,
            },
            lastName: {
              internalUse: false,
              show: true,
            },
            emailId: {
              internalUse: false,
              show: true,
            },
            phoneNumber: {
              internalUse: phoneInternal,
              show: phoneShow,
            },
            nationality: {
              internalUse: nationalityInternal,
              show: nationalityShow,
            },
            currentResidence: {
              internalUse: addInternal,
              show: addShow,
            },
            idNumber: {
              internalUse: idInternal,
              show: idShow,
            },
            dateOfBirth: {
              internalUse: dobInternal,
              show: dobShow,
            },
            gender: {
              internalUse: genderInternal,
              show: genderShow,
            },
            personalQuestions: personalQuestions,
          },
          customisedQuestions: additionalQuestions,
        },
      },
    };
    console.log("Data :: ", postData);
    openNotification("topRight");
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

  // Personal Info Section
  // Phone
  const [phoneInternal, setPhoneInternal] = React.useState(false);
  const [phoneShow, setPhoneShow] = React.useState(false);

  // Nationality
  const [nationalityInternal, setNationalityInternal] = React.useState(false);
  const [nationalityShow, setNationalityShow] = React.useState(false);

  // Address
  const [addInternal, setAddInternal] = React.useState(false);
  const [addShow, setAddShow] = React.useState(false);

  // ID Number
  const [idInternal, setIDInternal] = React.useState(false);
  const [idShow, setIdShow] = React.useState(false);

  // Date of Birth
  const [dobInternal, setDOBInternal] = React.useState(false);
  const [dobShow, setDOBShow] = React.useState(false);

  // Gender
  const [genderInternal, setGenderInternal] = React.useState(false);
  const [genderShow, setGenderShow] = React.useState(false);

  // Personal Questions
  const [personalQuestions, setPersonalQuestions] = React.useState<
    Array<Object>
  >([]);

  // File Upload Section
  const [coverImageURL, setCoverImage] = React.useState<String>();

  // Additional Question Section
  const [additionalQuestions, setAdditionalQuestion] = React.useState<
    Array<Object>
  >([
    {
      id: 0,
      choices: [],
      disqualify: false,
      maxChoice: 1,
      other: false,
      question: "Please tell me about yourself in less than 500 words.",
      type: "paragraph",
    }
  ]);

  return (
    <div>
      {contextHolder}
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
          <ImageUpload setCoverImage={setCoverImage} />
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
          <PersonalInformation
            phoneInternal={phoneInternal}
            setPhoneInternal={setPhoneInternal}
            phoneShow={phoneShow}
            setPhoneShow={setPhoneShow}
            nationalityInternal={nationalityInternal}
            setNationalityInternal={setNationalityInternal}
            nationalityShow={nationalityShow}
            setNationalityShow={setNationalityShow}
            addInternal={addInternal}
            setAddInternal={setAddInternal}
            addShow={addShow}
            setAddShow={setAddShow}
            idInternal={idInternal}
            setIDInternal={setIDInternal}
            idShow={idShow}
            setIdShow={setIdShow}
            dobInternal={dobInternal}
            setDOBInternal={setDOBInternal}
            dobShow={dobShow}
            setDOBShow={setDOBShow}
            genderInternal={genderInternal}
            setGenderInternal={setGenderInternal}
            genderShow={genderShow}
            setGenderShow={setGenderShow}
          />
          <AddQuestion
            allQuestion={personalQuestions}
            setAllQuestion={setPersonalQuestions}
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
          <AdditionalQuestions
            allQuestion={additionalQuestions}
            setAllQuestion={setAdditionalQuestion}
          />
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
