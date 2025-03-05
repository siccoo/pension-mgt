import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  role: "admin" | "member";
}

interface SessionState {
  user: User | null;
}

const storedUser = localStorage.getItem("user");
const initialState: SessionState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setUser } = sessionSlice.actions;
export default sessionSlice.reducer;
