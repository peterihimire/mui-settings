import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    handleAuthentication: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

export const { handleAuthentication } = authSlice.actions;

export default authSlice.reducer;
