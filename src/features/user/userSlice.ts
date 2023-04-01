import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    photo_url: string;
    gender: string;
    birth_date: string;
    home_phone: string;
    mobile_phone: string;
    work_phone: string;
    email: string;
    activity: {
      sms: number;
      email: number;
      orders: number;
    };
    carrier_status: {
      since: string;
      status: string;
    };
  } | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserFetch: state => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action: PayloadAction<UserState | any>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    getUserFailure: state => {
      state.isLoading = false;
    },
  },
});

export const { getUserFetch, getUserSuccess, getUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
