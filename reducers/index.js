import { combineReducers }                    from "redux"

import students                               from "./students"
import currentStudent                         from "./currentStudent"

const rootReducer = combineReducers({
  currentStudent,
  students,
})

export default rootReducer
