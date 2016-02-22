import { SET_CURRENT_STUDENT } from "../constants"

const initialState = 1

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_CURRENT_STUDENT:
      const { studentId } = payload
      return studentId

    default:
      return state
  }
}
