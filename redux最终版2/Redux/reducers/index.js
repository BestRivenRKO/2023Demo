import { combineReducers } from "redux";

import count from "./count";
import persons from "./person";
// reducer
export default combineReducers({
  count,
  persons,
});
