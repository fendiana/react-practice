import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikComponent = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Введіть своє ім'я";
    }

    if (!values.email) {
      errors.email = "Введіть свою електронну пошту";
    }

    return errors;
  };

  return (
    <div>
      <h2>Форма з використанням Formik</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Ім'я:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="email">Електронна пошта:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <button type="submit" style={{ marginTop: "15px" }}>
            Відправити
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikComponent;
