import { combineReducers } from "redux";
import { FETCH_THOUGHT_SUCCESS } from "../actions/thoughtActions";

const thoughts = (state = [], { type, data }) => {
  switch (type) {
    case FETCH_THOUGHT_SUCCESS:
      return data;
    default:
      return state;
  }
};

const thoughtReducer = combineReducers({
  thoughts,
});

export default thoughtReducer;
