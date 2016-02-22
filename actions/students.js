import { UPDATE_STUDENTS } from "../constants"

export function submitUpdateStudent(id, props) {
  return dispatch => {
    setTimeout(() => {
      const currentStudents = [
        { id: 1, name: "Kimberly Prins Moeller", phone: "2017396359", school: "University of Arizona", graduationYear: 2014, languages: ["French", "Italian", "German"] },
        { id: 2, name: "Christopher Moeller", phone: "2017392627", school: "Houghton College", graduationYear: 2005, languages: [] },
      ]
      const updatedStudents = currentStudents.map(
        (student, _i) => {
          return student.id === id ?
            Object.assign({}, student, props) :
            student
      })
      dispatch(updateStudentsInStorage(updatedStudents))
      dispatch(updateStudentsInState(updatedStudents))
    })
  }
}

function updateStudentsInStorage(students) {
  return dispatch => {
    setTimeout(() => {
      console.log(students)
    })
  }
}

export function updateStudentsInState(students) {
  return {
    type: UPDATE_STUDENTS,
    payload: {
      students,
    }
  }
}
