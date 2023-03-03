import { legacy_createStore as createStore } from "redux";

import countReducer from "./reducers/count";
export default createStore(countReducer);
