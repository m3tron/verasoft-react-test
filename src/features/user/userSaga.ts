import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUserSuccess } from "./userSlice";

function* workGetUserFetch() {
  const { data } = yield call(() =>
    axios.get("https://evoteam-verasoft.github.io/data/summary.json")
  );
  yield put(getUserSuccess(data));
}

function* userSaga() {
  yield takeEvery("users/getUserFetch", workGetUserFetch);
}

export default userSaga;
