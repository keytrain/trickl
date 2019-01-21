import { combineReducers } from "redux";
import {
  FETCH_COLUMN_SUCCESS,
  ADD_THOUGHT_SUCCESS,
  DEL_THOUGHT_SUCCESS,
  EDIT_THOUGHT_SUCCESS,
} from "../actions/thoughtActions";

const currColumnText = (state = [], { type, data }) => {
  switch (type) {
    case FETCH_COLUMN_SUCCESS:
      return data.children.map(thought => thought.content.text);
    case ADD_THOUGHT_SUCCESS:
      return [].concat(state, data.text);
    case DEL_THOUGHT_SUCCESS:
      return [].concat(state.slice(0, data.index), state.slice(data.index + 1));
    case EDIT_THOUGHT_SUCCESS:
      return Object.assign([...state], { [data.index]: data.text });
    default:
      return state;
  }
};

const currRoot = (state = "", { type, data }) => {
  switch (type) {
    case FETCH_COLUMN_SUCCESS:
      return data.id;
    default:
      return state;
  }
};

const thoughtReducer = combineReducers({
  currRoot,
  currColumnText,
});

export default thoughtReducer;
