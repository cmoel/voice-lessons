import C from "../constants"

export const newStudent = () => ({
  id: null,
  name: "",
  phone: "",
  school: "",
  graduationYear: null,
  languages: [],
  repList: "",
  notes: [],
})

export const showStudent = student => ({
  type: C.SHOW_STUDENT,
  payload: { student },
})

export const addStudent = student => ({
  type: C.ADD_STUDENT,
  payload: { student },
})

export const updateStudent = student => ({
  type: C.UPDATE_STUDENT,
  payload: { student },
})

export const deleteStudent = student => ({
  type: C.DELETE_STUDENT,
  payload: { student },
})

export const saveNewNote = student => ({
  type: C.SAVE_NEW_NOTE,
  payload: { student },
})
