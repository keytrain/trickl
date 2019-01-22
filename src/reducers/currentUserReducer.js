import { combineReducers } from "redux";

import {
  SET_AUTHENTICATED,
  LOAD_SESSION_REQUESTED,
  LOAD_SESSION_COMPLETED,
  LOGIN_SUCCESS,
  LOGIN_REQUESTED,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SAVE_USER_INFO,
  SIGNUP_REQUESTED,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  VERIFY_SIGNUP_SUCCESS,
  VERIFY_SIGNUP_REQUESTED,
  VERIFY_SIGNUP_FAILURE,
} from "../actions/currentUserActions";

const authenticated = (state = false, { type, status }) => {
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
      return "LOGIN";
    default:
      return state;
  }
};

const signUpStatus = (state = "SIGN UP", { type }) => {
  switch (type) {
    case SIGNUP_REQUESTED:
      return "SIGNING UP";
    case SIGNUP_FAILURE:
      return "SIGN UP FAILED";
    case SIGNUP_SUCCESS:
      return "VERIFY";
    case VERIFY_SIGNUP_REQUESTED:
      return "VERIFYING";
    case VERIFY_SIGNUP_FAILURE:
      return "INCORRECT CODE";
    case VERIFY_SIGNUP_SUCCESS:
      return "SIGN UP";
    default:
      return state;
  }
};

const userData = (state = {}, { type, info }) => {
  switch (type) {
    case SAVE_USER_INFO:
      return info;
    default:
      return state;
  }
};

const session = combineReducers({
  loading,
  authenticated,
  loginStatus,
  signUpStatus,
});

const currentUserReducer = combineReducers({
  session,
  userData,
});

export default currentUserReducer;
