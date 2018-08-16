import { call, put, takeLatest } from "redux-saga/effects"

import {
  LOAD_SESSION_REQUESTED,
  setAuthenticated,
  sessionLoaded,
  LOGIN_REQUESTED,
  loginSuccess,
  loginFailure,
  LOGOUT_REQUESTED,
  logoutSuccess,
} from "../actions/currentUserActions"
import { checkSession, login, logout } from "../services/AuthService"

export function* init() {
  try {
    const session = yield call(checkSession)
    if (session) {
      yield put(setAuthenticated(true))
    }
    yield put(sessionLoaded())
  } catch (e) {
    console.error(e.message)
    if (e !== "No current user") {
      console.log("no session")
    }
    //   const failAction = yield call(currentUserFailed, e.message)
    //   yield put(failAction)
  }
}

export function* loginUser({ email, password }) {
  if (!email || !password) return
  try {
    const result = yield call(login, email, password)
    if (result) {
      yield put(setAuthenticated(true))
      yield put(loginSuccess())
    } else {
      yield put(loginFailure())
    }
  } catch (e) {
    console.error(e.message)
  }
}

export function* logoutUser() {
  try {
    yield call(logout)
    yield put(setAuthenticated(false))
    yield put(logoutSuccess())
  } catch (e) {
    console.error(e.message)
  }
}

const userSagas = [
  takeLatest(LOAD_SESSION_REQUESTED, init),
  takeLatest(LOGIN_REQUESTED, loginUser),
  takeLatest(LOGOUT_REQUESTED, logoutUser),
]

export default userSagas
