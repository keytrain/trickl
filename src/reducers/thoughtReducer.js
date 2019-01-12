import { combineReducers } from "redux";
import {
  FETCH_THOUGHT_SUCCESS,
  CREATE_THOUGHT_SUCCESS,
} from "../actions/thoughtActions";

const rawColumn = (state = [], { type, data }) => {
  switch (type) {
    case CREATE_THOUGHT_SUCCESS:
    case FETCH_THOUGHT_SUCCESS:
      return data;
    default:
      return state;
  }
};

const currColumnText = (state = [], { type, data }) => {
  switch (type) {
    case CREATE_THOUGHT_SUCCESS:
    case FETCH_THOUGHT_SUCCESS:
      return data.children.map(thought => thought.content.text);
    default:
      return state;
  }
};

const currRoot = (state = "", { type, data }) => {
  switch (type) {
    case CREATE_THOUGHT_SUCCESS:
    case FETCH_THOUGHT_SUCCESS:
      return data.id;
    default:
      return state;
  }
};

const thoughtReducer = combineReducers({
  rawColumn,
  currRoot,
  currColumnText,
});

export default thoughtReducer;
