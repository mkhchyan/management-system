import { ADD_GROUPS, SET_GROUP } from "./type"

export const addGroups = (data) => {
  return { type: ADD_GROUPS, value: data }
}

export function setGroup(data) {
  return {
    type: SET_GROUP,
    data,
  }
}