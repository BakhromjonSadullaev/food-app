import { combineReducers } from "redux";
import basketReducer from "./basketReducer";

const allReducers = combineReducers({
  basketReducer,
});

export default allReducers;
