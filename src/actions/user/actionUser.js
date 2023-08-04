import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  isSigned: localStorage.getItem("isLoggedIn") ? true : false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true
      localStorage.setItem("isLoggedIn", true)
    },
    logout(state) {
      state.isLoggedIn = false
      localStorage.removeItem("isLoggedIn")
    },
    signup(state) {
      state.isSigned = true
      localStorage.setItem("isSigned", true)
    },
  },
});

export const userSelector = (state) => state.user;

export const { login, logout, signup } = userSlice.actions;

export default userSlice.reducer;
