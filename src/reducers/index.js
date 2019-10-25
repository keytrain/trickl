import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";
import data from "./thoughtReducer";
import ui from "./uiReducer";

const rootReducer = combineReducers({
  ui,
  currentUser,
  data,
});

export default rootReducer;
