import {combineReducers} from "redux";

import students from "./Student/reducer";

const rootReducer = combineReducers({students});

export default rootReducer;
