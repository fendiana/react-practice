const RadioButtons = ({ value, setValue }) => {
  const handleRadioChange = (event) => {
    const radio = event.target.name;
    setValue((prevState) => ({ ...prevState, radio }));
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <div>
        <label style={{ marginRight: 10 }} htmlFor="radio1">
          Radio 1
        </label>
        <input
          onChange={handleRadioChange}
          checked={value.radio === "radio1"}
          type="radio"
          name="radio1"
          id="radio1"
        />
      </div>
      <div>
        <label style={{ marginRight: 10 }} htmlFor="radio1">
          Radio 2
        </label>
        <input
          onChange={handleRadioChange}
          checked={value.radio === "radio2"}
          type="radio"
          name="radio2"
          id="radio2"
        />
      </div>
    </div>
  );
};

export default RadioButtons;
