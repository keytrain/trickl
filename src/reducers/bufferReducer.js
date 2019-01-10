import { combineReducers } from "redux";

/*import {
  SET_AUTHENTICATED,
  LOAD_SESSION_REQUESTED,
  LOAD_SESSION_COMPLETED,
  LOGIN_SUCCESS,
  LOGIN_REQUESTED,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SAVE_USER_INFO,
} from "../actions/currentUserActions";

/*const authenticated = (state = false, { type, status }) => {
  switch (type) {
    case SET_AUTHENTICATED:
      return status;
    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case LOAD_SESSION_REQUESTED:
      return true;
    case LOAD_SESSION_COMPLETED:
      return false;
    default:
      return state;
  }
};

const loginStatus = (state = "LOGIN", { type }) => {
  switch (type) {
    case LOGIN_REQUESTED:
      return "CHECKING";
    case LOGIN_FAILURE:
      return "INCORRECT CREDENTIALS";
    case LOGIN_SUCCESS:
      return "SUCCESS";
    case LOGOUT_SUCCESS:
    default:
      return state;
  }
};
*/
const data = (state = {}, { type, info }) => {
  switch (type) {
    default:
      return state;
  }
};

const bufferReducer = combineReducers({
  data,
});

export default bufferReducer;
