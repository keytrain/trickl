import { combineReducers } from "redux";
import {
  FETCH_COLUMN_SUCCESS,
  ADD_THOUGHT_SUCCESS,
  DEL_THOUGHT_SUCCESS,
  EDIT_THOUGHT_SUCCESS,
  SET_CURRENT_THOUGHT,
} from "../actions/thoughtActions";

const currColumnText = (state = [], { type, data }) => {
  switch (type) {
    case FETCH_COLUMN_SUCCESS:
      return data.children.map(thought => ({
        id: thought.id,
        text: thought.content.text,
      }));
    case ADD_THOUGHT_SUCCESS:
      return [].concat(state, { id: data.newThoughtId, text: data.text });
    case DEL_THOUGHT_SUCCESS:
      return [].concat(
        state.slice(0, data.index),
        state.slice(Number(data.index) + 1)
      );
    case EDIT_THOUGHT_SUCCESS:
      return Object.assign([...state], {
        [data.index]: { id: state[data.index].id, text: data.text },
      });
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

const currThought = (state = 0, { type, data }) => {
  switch (type) {
    case SET_CURRENT_THOUGHT:
      return data.index;
    case DEL_THOUGHT_SUCCESS:
      return 0;
    default:
      return state;
  }
};

const thoughtReducer = combineReducers({
  currRoot,
  currColumnText,
  currThought,
});

export default thoughtReducer;
