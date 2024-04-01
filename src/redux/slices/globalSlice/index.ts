import { IGlobalReduxState, IModal } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IGlobalReduxState = {
  modal: {
    isShow: false,
    content: null,
  },
};

export const globalSlice = createSlice({
  name: "Global",
  initialState,
  reducers: {
    onShowModal: (state, { payload }: { payload: IModal }) => {
      state.modal = { ...payload, isShow: true };
    },
    onHideModal: (state) => {
      state.modal = { isShow: false, content: null };
    },
  },
  extraReducers: (builder) => {},
});

export const { onShowModal, onHideModal } = globalSlice.actions;

export default globalSlice.reducer;
