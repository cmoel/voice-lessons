import { SET_CURRENT_STUDENT } from "../constants"

export function setCurrentStudent(studentId) {
  return {
    type: SET_CURRENT_STUDENT,
    payload: {
      currentStudentId: studentId,
    }
  }
}
