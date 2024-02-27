import { createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";

type AuthState = {
  user: User | null;
};
const initialState: AuthState = {
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleSignIn(state, { payload }: { payload: User | null }) {
      state.user = payload;
    },
  },
});
export const authReducer = authSlice.reducer;
