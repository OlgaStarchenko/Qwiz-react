import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsList: [],
  qwizStart: false,
  qwizEnd: false,
};

export const qwizSlice = createSlice({
  name: "qwiz",
  initialState,
  reducers: {
    setEndQwiz: (state) => {
      state.qwizEnd = true;
    },
    setQuestionsList: (state, action) => {
      state.questionsList = action.payload;
    },
    setQwizStart: (state) => {
      state.qwizStart = true;
    },
    handlePlayAgain: (state) => {
      state.qwizStart = false;
      state.qwizEnd = false;
      state.questionsList = [];
    },
  },
});
export const qwizReducer = qwizSlice.reducer;
export const { setEndQwiz, handlePlayAgain, setQuestionsList, setQwizStart } =
  qwizSlice.actions;
