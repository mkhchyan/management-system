import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addStudent } from "../store/students/action";
import { useParams } from "react-router-dom"


const AddStudents = () => {
  let { id } = useParams()
  console.log(id);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Add students</h1>
        <Formik
          initialValues={{
            id: Math.round(Math.random() * 100),
            name: "",
            surname: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            return errors;

            //use YUP here for validation
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            dispatch(addStudent({ ...values, group_id: id }));
            setSubmitting(false);
            // if (student.length < group.student_count){
            //   setStudent([...students, addStudent])
            // }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder='Name' /><br />
              <br />
              <Field type="text" name="surname" placeholder='Surname' /><br />
              <ErrorMessage name="surname" component="div" />
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

export default AddStudents;
