import { debounce } from "lodash";

const TextInputs = ({ value, setValue }) => {
  const handleNameChange = debounce((event) => {
    const name = event.target.value;
    console.log(name);
    setValue((prevState) => ({ ...prevState, name }));
  }, 1000);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <label style={{ marginRight: 10 }} htmlFor="firstName">
          Name
        </label>
        <input
          onChange={handleNameChange}
          value={value.name}
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label style={{ marginRight: 10 }} htmlFor="email">
          Email
        </label>
        <input
          onChange={handleEmailChange}
          value={value.email}
          type="email"
          name="email"
          id="email"
        />
      </div>
    </>
  );
};

export default TextInputs;
