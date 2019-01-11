import { call, put, takeLatest } from "redux-saga/effects";
import { createThought, getThought } from "../services/ThoughtService";
import {
  createThoughtSuccess,
  CREATE_THOUGHT_REQUESTED,
  FETCH_THOUGHT_REQUESTED,
  fetchThoughtSuccess,
  fetchThoughtFailure,
  createThoughtFailure,
} from "../actions/thoughtActions";

export function* createNewThought({ data: { thoughtRoot, text } }) {
  try {
    const res = yield call(createThought, thoughtRoot, text);
    yield put(createThoughtSuccess(res));
  } catch (e) {
    console.error(e.message);
    yield put(createThoughtFailure());
    //   const failAction = yield call(currentUserFailed, e.message)
    //   yield put(failAction)
  }
}

export function* fetchThoughts({ data: { id } }) {
  try {
    const res = yield call(getThought, id);
    yield put(fetchThoughtSuccess(res));
  } catch (e) {
    console.error(e.message);
    yield put(fetchThoughtFailure());
  }
}

const thoughtSagas = [
  takeLatest(CREATE_THOUGHT_REQUESTED, createNewThought),
  takeLatest(FETCH_THOUGHT_REQUESTED, fetchThoughts),
];

export default thoughtSagas;
