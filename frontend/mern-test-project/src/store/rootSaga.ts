import { all, fork } from "redux-saga/effects";

import employeeSaga from "./employee/sagas";

export function* rootSaga() {
  yield all([fork(employeeSaga)]);
}