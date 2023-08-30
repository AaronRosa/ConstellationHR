import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface GlobalModalState {
  isOpen: boolean;
  title: string;
}

const initialState: GlobalModalState = {
  isOpen: false,
  title: "",
};

export const globalModalSlice = createSlice({
  name: "globalModal",
  initialState,
  reducers: {
    showGlobalModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.title = action.payload;
    },
    hideGlobalModal: state => {
      state.isOpen = false;
    },
  },
});

const { actions, reducer } = globalModalSlice;

export const isGlobalModalOpen = (state: RootState) =>
  state.globalModal.isOpen;

export const getTitle = (state: RootState) => state.globalModal.title;

export const { showGlobalModal, hideGlobalModal } = actions;

export default reducer;
