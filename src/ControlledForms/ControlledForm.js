import React, { useState } from "react";
import InputData from "./InputData";
import Checkbox from "./Checkbox";
import TextInputs from "./TextInputs";
import RadioButtons from "./RadioButtons";
import CustomSelect from "./CustomSelect";

const ControlledForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <TextInputs value={value} setValue={setValue} />
        <Checkbox value={value} setValue={setValue} />
        <RadioButtons value={value} setValue={setValue} />
        <CustomSelect value={value} setValue={setValue} />
        <div style={{ padding: 20 }}>
          <input type="submit" style={{ width: 200, alignSelf: "center" }} />
        </div>
      </form>
      <InputData value={value} />
    </>
  );
};

export default ControlledForm;
