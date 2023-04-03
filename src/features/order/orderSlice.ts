import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Order {
  id: number;
  order_id: number;
  sent_dt: string;
  sent_tm: string;
  subject: {
    title: string;
    email: string;
  };
  type: string;
}
export interface Orders {
  order:
    | {
        sent: Order[];
      }
    | [];
}

export interface CurrentOrder {
  sent: Order[] | [];
}

export interface OrderState {
  orders: { sent: Order } | null;
  isLoading: boolean;
  currentOrder: CurrentOrder | null;
}

const initialState: OrderState = {
  orders: null,
  isLoading: false,
  currentOrder: null,
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
    setCurrentOrder: (state, action: PayloadAction<CurrentOrder>) => {
      state.currentOrder = action.payload;
    },
  },
});

export const {
  getOrderFetch,
  getOrderSuccess,
  getOrderFailure,
  setCurrentOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
