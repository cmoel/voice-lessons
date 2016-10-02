import C from "../constants"

const studentList = ({ previous, current, next }) => previous.concat([current]).concat(next)

const show = ({ state, payload: { student } }) => {
  const list = studentList(state)
  const index = list.findIndex(s => s.id === student.id)

  return {
    ...state,
    previous: list.slice(0, index),
    current: list[index],
    next: list.slice(index + 1, list.length),
  }
}

const deleteStudent = ({ state, payload: { student } }) => {
  const list = studentList(state)
  const index = list.findIndex(s => s.id === student.id)
  const filtered = list.filter(s => s.id !== student.id)

  // this is either the previous index or, in the case of deleting the first
  // student from the list, the (new) first student in the list
  const newIndex = Math.max(0, index - 1)

  return {
    ...state,
    previous: filtered.slice(0, newIndex),
    current: filtered[newIndex],
    next: filtered.slice(newIndex + 1, filtered.length),
  }
}

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {

    case C.SHOW_STUDENT:
      return show({ state, payload })

    case C.ADD_STUDENT:
      return {
        ...state,
        nextId: state.nextId + 1,
        previous: studentList(state),
        current: {
          ...payload.student,
          id: state.nextId,
        },
        next: [],
      }

    case C.UPDATE_STUDENT:
      return {
        ...state,
        current: payload.student,
      }

    case C.DELETE_STUDENT:
      return deleteStudent({ state, payload })

    default:
      return state

  }
}
