import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getOrderSuccess } from "./orderSlice";

function* workGetOrderFetch() {
  const { data } = yield call(() =>
    axios.get("https://evoteam-verasoft.github.io/data/orders.json")
  );
  yield put(getOrderSuccess(data));
}

function* orderSaga() {
  yield takeEvery("orders/getOrderFetch", workGetOrderFetch);
}

export default orderSaga;
