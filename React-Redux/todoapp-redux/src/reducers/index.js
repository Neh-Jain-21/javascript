/** @format */

import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import todoReducer from "./todoReducer";
import snackReducer from "./snackReducer";

const rootReducer = combineReducers({
    themeReducer,
    todoReducer,
    snackReducer,
});

export default rootReducer;
