import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import orderReducer from "../features/order/orderSlice";

const rootReducer = combineReducers({
  userState: userReducer,
  orderState: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
