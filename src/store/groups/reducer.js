import { groupsState } from "./state";
import { ADD_GROUPS, SET_GROUP } from "./type";

export const groupsReducer = (state = groupsState, action) => {
  switch (action.type) {
    case SET_GROUP:
      state.groups = action.value;
      break;
    case ADD_GROUPS:
      state.groups.push(action.value);
      break;
    default:
      break;
  }
  return { ...state };
};
