import {
  ADD_NEW_STUDENT,
} from "../constants"

// const student = (state, action) => {
//   const { type, payload } = action

//   switch (type) {

//     case ADD_STUDENT:
//       // const { student } = payload
//       const { id } = payload
//       console.log(Object.assign({}, newStudent, { id }))
//       return Object.assign({}, newStudent, { id })

//   }
// }

const newStudent = (id) => {
  name = "New Student"
  return {
    id,
    name,
  }
}

export default (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case ADD_NEW_STUDENT:
      const { id } = payload.student
      return [
        ...state,
        newStudent(id)
      ]

    default:
      return state
  }
}
