import { UPDATE_NEW_STUDENT_FORM } from "../constants"

const initialState = 1

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_NEW_STUDENT_FORM:
      return state

    default:
      return state
  }
}
