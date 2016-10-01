import { combineReducers } from "redux"

import students from "./students"
import currentStudentId from "./currentStudentId"
import nextStudentId from "./nextStudentId"
import studentForm from "./studentForm"

const rootReducer = combineReducers({
  currentStudentId,
  nextStudentId,
  students,
  studentForm,
})

export default rootReducer
