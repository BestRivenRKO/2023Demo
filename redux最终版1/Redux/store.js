import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import CountReducer from "./reducers/count";
import PersonReducer from "./reducers/person";
// 汇总reducer
const AllReducers = combineReducers({
  count: CountReducer,
  persons: PersonReducer,
});

export default createStore(AllReducers, applyMiddleware(thunk));
