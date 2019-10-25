import { combineReducers } from "redux";
import { COLLAPSE_SIDEBAR } from "../actions/uiActions";

const collapseSidebar = (state = false, { type }) => {
  switch (type) {
    case COLLAPSE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

const uiReducer = combineReducers({
  collapseSidebar,
});

export default uiReducer;
