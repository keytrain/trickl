import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_SESSION_REQUESTED,
  LOGIN_REQUESTED,
  LOGOUT_REQUESTED,
  sessionLoaded,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  saveUserInfo,
  setAuthenticated,
  loadSession,
} from "../actions/currentUserActions";
import { fetchColumnRequest } from "../actions/thoughtActions";
import { checkSession, login, logout } from "../services/AuthService";
import { createUser, getUser } from "../services/UserService";

export function* init() {
  try {
    const session = yield call(checkSession);
    if (session) {
      yield put(setAuthenticated(true));
      yield put(sessionLoaded());
      const userData = yield call(fetchUser);
      yield put(fetchColumnRequest({ id: userData.thoughtRoot }));
    } else {
      yield put(sessionLoaded());
    }
  } catch (e) {
    console.error(e.message);
    if (e !== "No current user") {
      console.warn("No session");
    }
    //   const failAction = yield call(currentUserFailed, e.message)
    //   yield put(failAction)
  }
}

export function* loginUser({ email, password }) {
  if (!email || !password) return;
  try {
    const result = yield call(login, email, password);
    if (result) {
      yield put(loginSuccess());
      // console.log(session.idToken.payload.sub)
      // call service to grab user settings from db
      // if doesn't exist, create it; might want to change this later when sign up is done
      yield put(loadSession());
    } else {
      yield put(loginFailure());
    }
  } catch (e) {
    console.error(e.message);
    yield put(loginFailure());
  }
}

export function* logoutUser() {
  try {
    yield call(logout);
    yield put(setAuthenticated(false));
    yield put(logoutSuccess());
  } catch (e) {
    console.error(e.message);
  }
}

export function* fetchUser() {
  try {
    const userInfo = yield call(getUser);
    if (!userInfo) {
      yield call(createUser);
    } else {
      yield put(saveUserInfo(userInfo));
      return userInfo;
    }
  } catch (e) {
    console.error(e.message);
  }
}

const userSagas = [
  takeLatest(LOAD_SESSION_REQUESTED, init),
  takeLatest(LOGIN_REQUESTED, loginUser),
  takeLatest(LOGOUT_REQUESTED, logoutUser),
];

export default userSagas;
