import Styles from "./index.module.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Row, Col, TextInput, Button } from "react-materialize";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import "firebase/auth";

const SignUp = () => {
  const history = useHistory();
  return (
    <div className="container">
      <Row>
        <Col m={2}></Col>
        <Col m={8}>
          <Card>
            <Formik
              initialValues={{ email: "", password: "", confirmPassword: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Not a valid email address")
                  .required("Email is required"),
                password: Yup.string()
                  .min(6, "Password must be atleast 6 characters long")
                  .required("Password Required"),
                confirmPassword: Yup.string().required(
                  "Please re-enter your password"
                ),
              })}
              validate={(values) => {
                if (values.confirmPassword !== values.password) {
                  return {
                    confirmPassword: "Passwords do not match",
                  };
                }
              }}
              onSubmit={async (values, { resetForm }) => {
                const { email, password } = values;
                try {
                  const user = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                  resetForm();
                  history.push("/login");
                } catch (error) {}
              }}
            >
              <Form>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <p className={Styles.errorMessage}>
                  <ErrorMessage name="email" />
                </p>

                <label htmlFor="password">Email</label>
                <Field name="password" type="password" />
                <p className={Styles.errorMessage}>
                  <ErrorMessage name="password" />
                </p>

                <label htmlFor="confirmPassword">Email</label>
                <Field name="confirmPassword" type="password" />
                <p className={Styles.errorMessage}>
                  <ErrorMessage name="confirmPassword" />
                </p>

                <Button type="submit">Submit</Button>
              </Form>
            </Formik>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
