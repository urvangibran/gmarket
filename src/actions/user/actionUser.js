import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const userSelector = (state) => state.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
