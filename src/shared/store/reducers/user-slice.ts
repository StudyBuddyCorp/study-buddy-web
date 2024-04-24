import { createSlice } from '@reduxjs/toolkit';
import { userAPI } from '../services/user-service';
import { User } from '@/entities/user';

type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLoadLocal(state) {
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user');
      if (userString) {
        const user: User = JSON.parse(userString);
        state.user = user;
        state.token = token;
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        userAPI.endpoints.registration.matchFulfilled,
        (state, { payload }) => {
          const { token, user } = payload;
          state.token = token;
          state.user = user;
          state.isAuthenticated = true;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          state.isLoading = false;
        },
      )
      .addMatcher(userAPI.endpoints.registration.matchPending, state => {
        state.isLoading = true;
      })
      .addMatcher(userAPI.endpoints.registration.matchRejected, state => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addMatcher(
        userAPI.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          const { token, user } = payload;
          state.token = token;
          state.user = user;
          state.isAuthenticated = true;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          state.isLoading = false;
        },
      )
      .addMatcher(userAPI.endpoints.login.matchPending, state => {
        state.isLoading = true;
      })
      .addMatcher(userAPI.endpoints.login.matchRejected, state => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addMatcher(userAPI.endpoints.logout.matchFulfilled, state => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      })
      .addMatcher(userAPI.endpoints.registration.matchPending, state => {
        state.isLoading = true;
      })
      .addMatcher(
        userAPI.endpoints.refresh.matchFulfilled,
        (state, { payload }) => {
          const { token, user } = payload;
          state.token = token;
          state.user = user;
          state.isAuthenticated = true;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          state.isLoading = false;
        },
      )
      .addMatcher(userAPI.endpoints.refresh.matchPending, state => {
        state.isLoading = true;
      })
      .addMatcher(userAPI.endpoints.refresh.matchRejected, state => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});
export const authReducer = authSlice.reducer;
