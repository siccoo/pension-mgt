import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  role: "admin" | "member";
}

interface SessionState {
  user: User | null;
}

const initialState: SessionState = {
  user: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = sessionSlice.actions;
export default sessionSlice.reducer;
