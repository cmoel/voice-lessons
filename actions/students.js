import C from "../constants"
// import { setCurrentStudent } from "./currentStudent"

export const showStudent = id => ({
  type: C.SHOW_STUDENT,
  payload: { id }
})

export const updateStudent = student => ({
  type: C.UPDATE_STUDENT,
  payload: { student }
})

// export const addStudent = () => (
//   (dispatch, getState) => {
//     const { nextStudentId } = getState()
//     dispatch(addNewStudent(nextStudentId))
//     dispatch(incrementNextStudentId(nextStudentId))
//     dispatch(setCurrentStudent(nextStudentId))
//   }
// )

// const addNewStudent = id => {
//   return {
//     type: C.ADD_STUDENT,
//     payload: {
//       student: { id }
//     }
//   }
// }

// const incrementNextStudentId = studentId => {
//   return {
//     type: C.INCREMENT_NEXT_STUDENT_ID,
//     payload: {
//       studentId
//     }
//   }
// }
