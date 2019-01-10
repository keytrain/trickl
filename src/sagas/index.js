import { all } from "redux-saga/effects";

import userSagas from "./userSagas";
import thoughtSagas from "./thoughtSagas";

export default function* rootSaga() {
  yield all([...userSagas, ...thoughtSagas]);
}
