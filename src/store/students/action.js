import { ADD_STUDENT, DELETE_STUDENT } from "./type"

export const addStudent = (data) => {
  return { type: ADD_STUDENT, value: data }
}

export const deleteStudent = (id) => {
  return {
      type: DELETE_STUDENT,
      payload: id
  }
}
