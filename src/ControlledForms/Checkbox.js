const Checkbox = ({ value, setValue }) => {
  const handleCheckboxChange = (event) => {
    const checkbox = event.target.checked;
    setValue((prevState) => ({ ...prevState, checkbox }));
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ marginRight: 10 }} htmlFor="email">
        Checkbox
      </label>
      <input
        onChange={handleCheckboxChange}
        checked={value.checked}
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
    </div>
  );
};

export default Checkbox;
