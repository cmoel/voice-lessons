import { INCREMENT_NEXT_STUDENT_ID } from "../constants"

const initialState = 1

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case INCREMENT_NEXT_STUDENT_ID:
      const { studentId } = payload
      return studentId + 1

    default:
      return state
  }
}
