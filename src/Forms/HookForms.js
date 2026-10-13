import React from "react";
import { useForm } from "react-hook-form";

const HookForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Форма з використанням React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span>Це поле є обов'язковим</span>}
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && <span>Введіть коректну електронну пошту</span>}
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>
          Відправити
        </button>
      </form>
    </div>
  );
};

export default HookForms;
