import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "./count_reducers";
export default createStore(countReducer, applyMiddleware(thunk));
