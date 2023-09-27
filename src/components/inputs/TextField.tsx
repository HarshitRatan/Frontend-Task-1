import { Input } from "antd";

const TextField = (props: any) => {
  const { label, placeholder, value, setValue, error, errorMessage, setError } =
    props;

  return (
    <div
      style={{
        marginTop: "1rem",
        width: "100%",
        marginBottom: "1rem",
      }}
    >
      <label
        htmlFor="inputField"
        style={{
          color: "#000000bf",
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        {label}
      </label>
      <Input
        style={{
          width: "100%",
          height: "3.5rem",
          fontWeight: 600,
          marginTop: "1rem",
        }}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value);
          setError(false);
        }}
      />
      {error && <label style={{ color: "red" }}>{errorMessage}</label>}
    </div>
  );
};

export default TextField;
