import React from "react";
import { Card, Row, Col, TextInput, Button } from "react-materialize";
import { Formik, Field, Form, ErrorMessage } from "formik";
import firebase from "firebase";
import "firebase/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="container">
      <Row>
        <Col m={2}></Col>
        <Col m={8}>
          <Card>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values, { resetForm }) => {
                const { email, password } = values;
                try {
                  const user = await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                  resetForm();
                  history.push("/");
                } catch (error) {}
              }}
            >
              <Form>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />

                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <Button type="submit">Login</Button>
              </Form>
            </Formik>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
