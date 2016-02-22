import {
  INIT_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  UPDATE_STUDENTS,
  DELETE_STUDENT
} from "../constants"

const initialState = []

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_STUDENT:
      return state

    case UPDATE_STUDENT:
      return state

    case UPDATE_STUDENTS:
      const { students } = payload
      return students

    case DELETE_STUDENT:
      return state

    default:
      return state
  }
}
