import { Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import FormBlock from "../../../components/formBlock/FormBlock";

const PersonalInformation = (props: any) => {
  const {
    phoneInternal,
    setPhoneInternal,
    phoneShow,
    setPhoneShow,

    nationalityInternal,
    setNationalityInternal,
    nationalityShow,
    setNationalityShow,

    addInternal,
    setAddInternal,
    addShow,
    setAddShow,

    idInternal,
    setIDInternal,
    idShow,
    setIdShow,

    dobInternal,
    setDOBInternal,
    dobShow,
    setDOBShow,

    genderInternal,
    setGenderInternal,
    genderShow,
    setGenderShow,
  } = props;
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
        Personal Information
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
        <FormBlock label="First Name" />
        <FormBlock label="Last Name" />
        <FormBlock label="Email" />
        <FormBlock
          label="Phone"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
          checkboxValue={phoneInternal}
          setCheckboxValue={setPhoneInternal}
          sliderValue={phoneShow}
          setSliderValue={setPhoneShow}
        />
        <FormBlock
          label="Nationality"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
          checkboxValue={nationalityInternal}
          setCheckboxValue={setNationalityInternal}
          sliderValue={nationalityShow}
          setSliderValue={setNationalityShow}
        />
        <FormBlock
          label="Current Residence "
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
          checkboxValue={addInternal}
          setCheckboxValue={setAddInternal}
          sliderValue={addShow}
          setSliderValue={setAddShow}
        />
        <FormBlock
          label="ID Number"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
          checkboxValue={idInternal}
          setCheckboxValue={setIDInternal}
          sliderValue={idShow}
          setSliderValue={setIdShow}
        />
        <FormBlock
          label="Date of Birth "
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
          checkboxValue={dobInternal}
          setCheckboxValue={setDOBInternal}
          sliderValue={dobShow}
          setSliderValue={setDOBShow}
        />
        <FormBlock
          label="Gender"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
          checkboxValue={genderInternal}
          setCheckboxValue={setGenderInternal}
          sliderValue={genderShow}
          setSliderValue={setGenderShow}
        />
      </Space>
    </>
  );
};

export default PersonalInformation;
