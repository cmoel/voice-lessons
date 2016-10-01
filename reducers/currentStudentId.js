import { SET_CURRENT_STUDENT } from "../constants"

const initialState = 1

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_CURRENT_STUDENT:
      const { currentStudentId } = payload
      return currentStudentId

    default:
      return state
  }
}
