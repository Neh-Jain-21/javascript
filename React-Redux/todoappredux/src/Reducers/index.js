/** @format */

import addToDoReducer from "./addTodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addToDoReducer,
});

export default rootReducer;
