import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
  orders: {} | null;
  isLoading: boolean;
}

const initialState: OrderState = {
  orders: null,
  isLoading: false,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrderFetch: state => {
      state.isLoading = true;
    },
    getOrderSuccess: (state, action: PayloadAction<OrderState | any>) => {
      state.orders = action.payload;
      state.isLoading = false;
    },
    getOrderFailure: state => {
      state.isLoading = false;
    },
  },
});

export const { getOrderFetch, getOrderSuccess, getOrderFailure } =
  orderSlice.actions;

export default orderSlice.reducer;
