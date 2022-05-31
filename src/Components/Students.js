import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../store/students/action";
import { useParams } from "react-router-dom"


function Students() {
  const { id } = useParams()

  const { students } = useSelector((state) => state.studentData);
  console.log(students);
  const dispatch = useDispatch();
  const filteredStudents = students.filter(el => +el.group_id === +id)

  useEffect(() => {
    console.log("Students.js is working");
  }, []);

  return (
    <>
      <div className="App">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.surname}</td>
                  <td >
                    <button className="btn btn-danger" onClick={() => dispatch(deleteStudent(student.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Students;