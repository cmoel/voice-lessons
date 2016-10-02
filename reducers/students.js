import C from "../constants"

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

// const newStudent = id => {
//   name = "New Student"
//   return {
//     id,
//     name,
//   }
// }

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {

    // case C.ADD_STUDENT:
    //   const { id } = payload.student
    //   return [
    //     ...state,
    //     newStudent(id),
    //   ]

    case C.SHOW_STUDENT:
      const { previous, current, next } = state
      const { id } = payload

      const list = previous.concat([current]).concat(next)
      const i = list.findIndex(s => s.id === id)

      const selected = list[i]
      const newPrevious = list.slice(0, i)
      const newNext = list.slice(i + 1, list.length)

      return {
        ...state,
        previous: newPrevious,
        current: selected,
        next: newNext,
      }

    case C.UPDATE_STUDENT:
      const { student } = payload
      return {
        ...state,
        current: student,
      }

    default:
      return state

  }
}
