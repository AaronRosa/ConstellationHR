import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface UserState {
  user: string;
}

// Define the initial state using that type
const initialState: UserState = {
  user: "",
};

export const userSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    logOutUser: state => {
      state.user = "";
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.currentUser.user;

// Extract and export each action creator by name
export const { setUser, logOutUser } = actions;

export default reducer;
