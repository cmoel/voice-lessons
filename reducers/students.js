import {
  INIT_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT
} from "../constants"

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case INIT_STUDENTS:
      return state

    case ADD_STUDENT:
      return state

    case UPDATE_STUDENT:
      return state

    case DELETE_STUDENT:
      return state

    default:
      return state
  }
}
