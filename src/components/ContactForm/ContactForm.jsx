import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format must be 111-11-11")
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};
const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <div className={styles.fieldGroup}>
          <label htmlFor={nameFieldId} className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={styles.input}
          />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor={numberFieldId} className={styles.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={styles.input}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
