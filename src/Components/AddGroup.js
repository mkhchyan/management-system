import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ADD_GROUPS } from "../store/groups/type";
import { addGroups } from "../store/groups/action";

const AddGroups = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Add groups</h1>
        <Formik
          initialValues={{
            id: Math.round(Math.random() * 100),
            groupName: "",
            count: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.groupName) {
              errors.groupName = "Required";
            }
            return errors;

            //use YUP here for validation
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            dispatch(addGroups(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="groupName" />
              <ErrorMessage name="groupName" component="div" />
              <br />
              <Field type="number" name="count" />
              <ErrorMessage name="count" component="div" />
              <br />
              <button type="submit" disabled={isSubmitting}>
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddGroups;
