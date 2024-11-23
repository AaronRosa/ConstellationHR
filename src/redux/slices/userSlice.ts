import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

let localStorageUserKey = "loggedInUser";
const localStoredUser =
  localStorage.getItem(localStorageUserKey) != null
    ? JSON.parse(localStorage.getItem(localStorageUserKey) || "")
    : <User>{};

// Define a type for the slice state
export interface UserState {
  user: User;
}

export interface User {
  id: string;
  fname: string;
  lname: string;
  shipAssignedID: string;
  shipAssignedName: string;
  email: string;
  role: string;
}

// Define the initial state using that type
const initialState: UserState = {
  user: localStoredUser,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      console.log("loginUser action.payload: ", action.payload);
      state.user = action.payload;
      localStorage.clear();
      localStorage.setItem(
        localStorageUserKey,
        JSON.stringify(state.user),
      );
    },
    logOutUser: state => {
      state.user = <User>{};
      localStorage.clear();
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) =>
  state.currentUser.user;

export const isUserSignedIn = (state: RootState) =>
  state.currentUser.user.id ? true : false;

// Extract and export each action creator by name
export const { loginUser, logOutUser } = actions;

export default reducer;
