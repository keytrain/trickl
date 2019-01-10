import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";
import data from "./thoughtReducer";

const rootReducer = combineReducers({
  currentUser,
  data,
});

export default rootReducer;
