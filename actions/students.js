import {
  ADD_NEW_STUDENT,
  INCREMENT_NEXT_STUDENT_ID,
} from "../constants"
import { setCurrentStudent } from "./currentStudent"

export const addStudent = () => {
  return (dispatch, getState) => {
    const { nextStudentId } = getState()
    dispatch(addNewStudent(nextStudentId))
    dispatch(incrementNextStudentId(nextStudentId))
    dispatch(setCurrentStudent(nextStudentId))
  }
}

const addNewStudent = (id) => {
  return {
    type: ADD_NEW_STUDENT,
    payload: {
      student: { id }
    }
  }
}

const incrementNextStudentId = (studentId) => {
  return {
    type: INCREMENT_NEXT_STUDENT_ID,
    payload: {
      studentId
    }
  }
}
