import { call, put, take, takeLatest } from "redux-saga/effects";

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
  SIGNUP_REQUESTED,
  signUpSuccess,
  signUpFailure,
  VERIFY_SIGNUP_REQUESTED,
  verifySignUpSuccess,
  verifySignUpFailure,
  loginUserRequested,
} from "../actions/currentUserActions";
import {
  fetchColumnRequest,
  createColumnRequest,
  CREATE_COLUMN_SUCCESS,
} from "../actions/thoughtActions";
import {
  checkSession,
  login,
  logout,
  signup,
  verifySignup,
  resendVerify,
} from "../services/AuthService";
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

export function* signupUser({ email, password }) {
  if (!email || !password) return;
  try {
    const result = yield call(signup, email, password);
    if (result) {
      yield put(signUpSuccess());
    }
  } catch (e) {
    if (e.name === "UsernameExistsException") {
      try {
        yield call(login, email, password);
      } catch (e) {
        if (e.name === "UserNotConfirmedException") {
          yield call(resendVerify, email);
          yield put(signUpSuccess());
        }
      }
    } else {
      yield put(signUpFailure());
    }
  }
}

export function* verifyUser({ email, password, confirmationCode }) {
  if (!email || !password || !confirmationCode) return;
  try {
    yield call(verifySignup, email, confirmationCode);
    yield put(verifySignUpSuccess());
    yield put(loginUserRequested(email, password));
  } catch (e) {
    console.error(e.message);
    yield put(verifySignUpFailure());
  }
}

export function* fetchUser() {
  try {
    let userInfo = yield call(getUser);
    if (!userInfo) {
      throw new Error("Can't fetch user for some reason");
      userInfo = yield call(createUser);
      yield put(
        createColumnRequest({ thoughtRoot: userInfo.thoughtRoot, text: " " })
      );
      yield take(CREATE_COLUMN_SUCCESS);
    }
    yield put(saveUserInfo(userInfo));
    return userInfo;
  } catch (e) {
    console.error(e.message);
  }
}

const userSagas = [
  takeLatest(LOAD_SESSION_REQUESTED, init),
  takeLatest(LOGIN_REQUESTED, loginUser),
  takeLatest(LOGOUT_REQUESTED, logoutUser),
  takeLatest(SIGNUP_REQUESTED, signupUser),
  takeLatest(VERIFY_SIGNUP_REQUESTED, verifyUser),
];

export default userSagas;
