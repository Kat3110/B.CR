import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  updateList: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addUpdateList: (state, { payload }) => {
      if (state.updateList.some((item) => item.id === payload.id)) {
        state.updateList = [
          ...state.updateList.filter((item) => item.id !== payload.id),
          { key: nanoid(10), ...payload },
        ];
        return;
      }
      state.updateList = [...state.updateList, { key: nanoid(10), ...payload }];
    },
    deleteUpdateList: (state, { payload }) => {
      state.updateList = state.updateList.filter(
        (item) => !payload.some((deleteValue) => deleteValue === item.id),
      );
    },
    resetUpdateList: (state) => {
      state.updateList = [];
    },
  },
});

export default projectSlice.reducer;

export const { addUpdateList, deleteUpdateList, resetUpdateList } =
  projectSlice.actions;

export const getUpdateList = (state) => state.project.updateList;
