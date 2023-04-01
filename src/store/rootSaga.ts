import { all } from "redux-saga/effects";
import userSaga from "../features/user/userSaga";
import orderSaga from "../features/order/orderSaga";

export default function* rootSaga() {
  yield all([userSaga(), orderSaga()]);
}
