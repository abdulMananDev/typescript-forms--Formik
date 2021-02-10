import React from "react";
import { FormikProps, Form, Field } from "formik";
import { withFormik } from "formik";

interface MFormInputs {
  email: string;
  firstName: string;
  lastName: string;
  createPassword: string;
  age: number;
}

interface MSideInputs {
  title: string; //Signup form OR Login Form
  briefMessage: string;
}

const FormUI = (props: MSideInputs & FormikProps<MFormInputs>) => {
  const { touched, errors, isSubmitting, title, briefMessage } = props;
  return (
    <Form>
      <h3>{title}</h3>
      <h5>{briefMessage}</h5>

      <Field type="email" name="email" placeholder="Enter Email" />
      {touched.email && errors.email && <div>Error</div>}

      <Field type="password" name="createPassword" placeholder="password" />
      {touched.createPassword && errors.createPassword && <div>Error</div>}

      <Field type="text" name="firstName" placeholder="First Name" />
      {touched.firstName && errors.firstName && <div>Error</div>}

      <Field type="text" name="lastName" placeholder="Last Name" />
      {touched.lastName && errors.lastName && <div>Error</div>}

      <Field type="number" name="age" placeholder="Enter Age" />
      {touched.age && errors.age && <div>Error</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface MFormProps {
  initialEmail?: string;
  initialFs?: string;
  initialLs?: string;
  initialPs?: string;
  initialAge?: number;
  briefMessage: string;
  title: string;
}

const RenderForm = withFormik<MFormProps, MFormInputs>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      createPassword: props.initialPs || "",
      firstName: props.initialFs || "",
      lastName: props.initialLs || "",
      age: props.initialAge
    };
  },

  handleSubmit: (values) => {
    console.log(values);
  }
})(FormUI);

export default RenderForm;
