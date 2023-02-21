import { legacy_createStore as createStore } from "redux";
// 引入reducers
import countReducer from "./count_reducers";
// 暴露store
export default createStore(countReducer);
