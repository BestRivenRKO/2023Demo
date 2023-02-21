import { legacy_createStore as createStore } from "redux";
import countReducer from "./count_reducers";
export default createStore(countReducer);
