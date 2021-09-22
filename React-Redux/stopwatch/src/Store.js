/** @format */

import { createStore } from "redux";
import rootReducer from "./reducers/Index";

const Store = createStore(rootReducer);

export default Store;
