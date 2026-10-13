import { useRef } from "react";

const UncontrolledForm = () => {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formRef.current.firstName.value);
    console.log(formRef.current.email.value);

    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <input type="submit" />
    </form>
  );
};

export default UncontrolledForm;
