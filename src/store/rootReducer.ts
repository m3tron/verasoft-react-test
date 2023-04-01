import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import orderReducer from "../features/order/orderSlice";

const rootReducer = combineReducers({
  user: userReducer,
  orders: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
