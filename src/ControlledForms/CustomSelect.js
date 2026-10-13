const CustomSelect = ({ value, setValue }) => {
  const selectOptions = [
    { id: 1, value: "option1" },
    { id: 2, value: "option2" },
    { id: 3, value: "option3" },
    { id: 4, value: "option4" },
    { id: 5, value: "option5" },
    { id: 6, value: "option6" },
    { id: 7, value: "option7" },
  ];

  const handleSelectChange = (event) => {
    const select = event.target.value;
    setValue((prevState) => ({ ...prevState, select }));
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ marginRight: 10 }} htmlFor="select">
        Select
      </label>
      <select onChange={handleSelectChange} name="select" id="select">
        {selectOptions.map((option) => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
