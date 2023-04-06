import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Orders {
  order: Order | [] | null;
}

export interface Order {
  sent?: Sent[] | null;
}

export interface Sent {
  id: number;
  order_id: number;
  sent_dt: string;
  sent_tm: string;
  subject: Subject;
  type: string;
}

export interface Subject {
  title: string;
  email: string;
}

export interface OrderState {
  orders: Orders | [] | null;
  isLoading: boolean;
  currentOrder: number;
}

const initialState: OrderState = {
  orders: null,
  isLoading: false,
  currentOrder: 0,
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
    setCurrentOrder: (state, action: PayloadAction<number>) => {
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
