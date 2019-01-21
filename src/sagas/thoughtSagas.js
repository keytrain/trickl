import { call, put, takeLatest } from "redux-saga/effects";
import {
  createColumn,
  getThought,
  addThought,
  editThought,
  delThought,
} from "../services/ThoughtService";
import {
  addThoughtSuccess,
  CREATE_COLUMN_REQUESTED,
  FETCH_COLUMN_REQUESTED,
  fetchColumnSuccess,
  fetchColumnFailure,
  addThoughtFailure,
  ADD_THOUGHT_REQUESTED,
  EDIT_THOUGHT_REQUESTED,
  DEL_THOUGHT_REQUESTED,
  createColumnSuccess,
  createColumnFailure,
  editThoughtSuccess,
  delThoughtSuccess,
  delThoughtFailure,
  editThoughtFailure,
} from "../actions/thoughtActions";

export function* _createColumn({ data: { thoughtRoot, text } }) {
  try {
    const res = yield call(createColumn, thoughtRoot, text);
    yield put(createColumnSuccess(res));
  } catch (e) {
    console.error(e.message);
    yield put(createColumnFailure());
  }
}

export function* _addThought({ data: { id, text } }) {
  try {
    yield call(addThought, id, text);
    yield put(addThoughtSuccess(id, text));
  } catch (e) {
    console.error(e.message);
    yield put(addThoughtFailure());
  }
}

export function* _editThought({ data: { id, index, text } }) {
  try {
    yield call(editThought, id, index, text);
    yield put(editThoughtSuccess({ id, index, text }));
  } catch (e) {
    console.error(e.message);
    yield put(editThoughtFailure());
  }
}

export function* _delThought({ data: { id, index } }) {
  try {
    yield call(delThought, id, index);
    yield put(delThoughtSuccess({ id, index }));
  } catch (e) {
    console.error(e.message);
    yield put(delThoughtFailure());
  }
}

export function* _fetchColumn({ data: { id } }) {
  try {
    const res = yield call(getThought, id);
    yield put(fetchColumnSuccess(res));
  } catch (e) {
    console.error(e.message);
    yield put(fetchColumnFailure());
  }
}

const thoughtSagas = [
  takeLatest(CREATE_COLUMN_REQUESTED, _createColumn),
  takeLatest(ADD_THOUGHT_REQUESTED, _addThought),
  takeLatest(EDIT_THOUGHT_REQUESTED, _editThought),
  takeLatest(DEL_THOUGHT_REQUESTED, _delThought),
  takeLatest(FETCH_COLUMN_REQUESTED, _fetchColumn),
];

export default thoughtSagas;
