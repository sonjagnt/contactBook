import { Field, Formik, Form, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";
import { validationSchema } from "../../validation/contacts.js";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../constants/muiTheme.js";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s["contact-form"]}>
        <label htmlFor="name" className={s.label}>
          Name
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="span" />
        </label>
        <label htmlFor="number" className={s.label}>
          Number
          <Field type="tel" name="number" className={s.input} />
          <ErrorMessage name="number" component="span" />
        </label>
        <ThemeProvider theme={theme}>
          <Button type="submit" variant="contained" className={s.addBtn}>
            Add contact
          </Button>
        </ThemeProvider>
      </Form>
    </Formik>
  );
};

export default ContactForm;
