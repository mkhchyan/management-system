import { studentsState } from "./state";
import { ADD_STUDENT, DELETE_STUDENT, STUDENTS_DATA } from "./type";

export const studentsReducer = (state = studentsState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      state.students.push(action.value)
      // console.log(state.students)
      break;
    case STUDENTS_DATA:
      state.students = action.value
      break;
    case DELETE_STUDENT:
      state.students = state.students.filter((el) => el.id !== action.payload)
      break;
    default:
      break;
  }
  return { ...state }
}