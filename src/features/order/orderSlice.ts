import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
  order: {} | null;
  isLoading: boolean;
}

const initialState: OrderState = {
  order: null,
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
      state.order = action.payload;
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
