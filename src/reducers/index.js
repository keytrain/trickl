import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";
import buffer from "./bufferReducer";

const rootReducer = combineReducers({
  currentUser,
  buffer,
});

export default rootReducer;
