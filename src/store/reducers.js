import { combineReducers } from "redux";
import { groupsReducer } from "./groups/reducer";
import { studentsReducer } from "./students/reducer";

export const reducers = combineReducers({
  groupData: groupsReducer,
  studentData: studentsReducer
}) 