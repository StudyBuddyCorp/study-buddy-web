import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserService";
import { IUser } from "@/entities/user/IUser";
type AuthState = {
  user: IUser | null;
  token: string | null,
  isLoading: boolean,
  isAuthenticated: boolean,
};
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userAPI.endpoints.registration.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          state.isAuthenticated = true
          state.isLoading = false
        }
      )
      .addMatcher(
        userAPI.endpoints.registration.matchPending,
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        userAPI.endpoints.registration.matchRejected,
        (state) => {
          state.token = null
          state.user = null
          state.isAuthenticated = false
          state.isLoading = false
        }
      )
      .addMatcher(
        userAPI.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          state.isAuthenticated = true
          state.isLoading = false
        }
      )
      .addMatcher(
        userAPI.endpoints.login.matchPending,
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        userAPI.endpoints.login.matchRejected,
        (state) => {
          state.token = null
          state.user = null
          state.isAuthenticated = false
          state.isLoading = false
        }
      )
      .addMatcher(
        userAPI.endpoints.logout.matchFulfilled,
        (state) => {
          state.token = null;
          state.user = null;
          state.isAuthenticated = false
          state.isLoading = false
        }
      )
      .addMatcher(
        userAPI.endpoints.registration.matchPending,
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        userAPI.endpoints.refresh.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          state.isAuthenticated = true
          state.isLoading = false
        }
      )
      .addMatcher(
        userAPI.endpoints.refresh.matchPending,
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        userAPI.endpoints.refresh.matchRejected,
        (state) => {
          state.token = null
          state.user = null
          state.isAuthenticated = false
          state.isLoading = false
        }
      )
  }
});
export const authReducer = authSlice.reducer;
