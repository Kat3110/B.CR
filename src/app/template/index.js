import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: undefined,
  updateBlocks: [],
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, { payload }) => {
      state.template = payload;
    },
    updateBlocks: (state, { payload: { id, content, stageId } }) => {
      state.updateBlocks = state.updateBlocks.some((item) => item.id === id)
        ? state.updateBlocks
        : [...state.updateBlocks, { id, content, stageId }];
      const updateStages = state.template.Stages.map((stage) => {
        if (stage.id !== stageId) return stage;
        return {
          ...stage,
          Blocks: stage.Blocks.map((block) => {
            if (block.id !== id) return block;
            return { ...block, content };
          }),
        };
      });
      state.template = { ...state.template, Stages: updateStages };
    },
  },
});

export default templateSlice.reducer;

export const { setTemplate, updateBlocks } = templateSlice.actions;

export const getTemplate = (state) => state.template.template;
