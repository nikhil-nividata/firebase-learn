import React from "react";
import { Formik, Field, ErrorMessage, Form, useFormik } from "formik";
import { Modal, Button, TextInput, Textarea } from "react-materialize";
import firebase from "firebase";
import "firebase/functions";

export default function CreatePost() {
  const functions = firebase.functions();
  const formik = useFormik({
    initialValues: { title: "", post: "" },
    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "Post Title Required";
      }
      if (!values.post) {
        errors.post = "Post should not be empty";
      }
      return errors;
    },
    onSubmit: async (values) => {
      const addPost = functions.httpsCallable("addPost");
      try {
        const response = await addPost({
          ...values,
          createdAt: Date.now(),
        });
        values.title = "";
        values.post = "";
        document.getElementById("modalCloseButton").click();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Modal
      actions={[
        <Button
          flat
          node="button"
          waves="green"
          onClick={() => {
            document.getElementById("submitPost").click();
          }}
        >
          Post
        </Button>,
        <Button
          flat
          modal="close"
          node="button"
          waves="red"
          id="modalCloseButton"
        >
          Cancel
        </Button>,
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header="Create a Post"
      id="Modal-0"
      open={false}
      options={{
        dismissible: true,
        endingTop: "10%",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: "4%",
      }}
      trigger={
        <Button
          id="createModalTrigger"
          node="button"
          style={{ display: "none" }}
        >
          MODAL
        </Button>
      }
    >
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          name="title"
          id="title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Title"
        ></TextInput>
        {formik.errors.title ? (
          <p style={{ color: "red", fontSize: "12px" }}>
            {formik.errors.title}
          </p>
        ) : null}

        {formik.errors.post ? (
          <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.post}</p>
        ) : null}
        <Textarea
          name="post"
          id="post"
          value={formik.values.post}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Post"
        ></Textarea>
        <Button id="submitPost" type="submit" style={{ display: "none" }}>
          Post
        </Button>
      </form>
    </Modal>
  );
}
