import React from "react";
import { Checkbox, ConfigProvider, Divider, Switch } from "antd";

const FormBlock = (props: any) => {
  const {
    displayAdditionalOptions,
    displayAdditionalOptionsText,
    label,
    checkboxValue,
    setCheckboxValue,
    sliderValue,
    setSliderValue,
  } = props;
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label
          htmlFor="inputField"
          style={{
            color: "#000",
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "600",
          }}
        >
          {label}
        </label>
        {displayAdditionalOptions && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "50%",
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
                style={{ color: "black", fontWeight: 400, fontSize: "1rem" }}
                checked={checkboxValue}
                onChange={() => {
                  setCheckboxValue(!checkboxValue);
                }}
              >
                {displayAdditionalOptionsText}
              </Checkbox>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Switch
                  checked={sliderValue}
                  onChange={(checked: boolean) => {
                    setSliderValue(checked);
                    console.log(checked);
                  }}
                />
                <span
                  style={{ color: "#666", fontWeight: 400, fontSize: "1rem" }}
                >
                  {sliderValue ? "Show" : "Hide"}
                </span>
              </div>
            </ConfigProvider>
          </div>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default FormBlock;
