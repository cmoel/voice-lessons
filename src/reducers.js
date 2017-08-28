import {combineReducers} from "redux";

import students from "./Student/reducer";
import searchTerm from "./Sidebar/Search/reducer";

const rootReducer = combineReducers({students, searchTerm});

export default rootReducer;
