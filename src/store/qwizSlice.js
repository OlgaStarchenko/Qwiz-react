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
      let questions = action.payload.results.map((el) => {
        return {
          ...el,
          answers: [...el.incorrect_answers, el.correct_answer].sort(
            () => Math.random() - 0.5,
          ),
          selected_answer: null,
        };
      });

      state.questionsList = questions;
    },
    setQwizStart: (state) => {
      state.qwizStart = true;
    },
    handlePlayAgain: (state) => {
      state.qwizStart = false;
      state.qwizEnd = false;
      state.questionsList = [];
    },
    selectAnswer: (state, action) => {
      state.questionsList = state.questionsList.map((item, index) => {
        if (index === action.payload.questionIndex) {
          item.selected_answer = action.payload.answer;
        }
        return item;
      });
    },
  },
});
export const qwizReducer = qwizSlice.reducer;
export const isAllSelected = (state) =>
  state.qwiz.questionsList.every((item) => item.selected_answer);
export const getCorrectAnswers = (state) =>
  state.qwiz.questionsList.filter(
    (qwestion) => qwestion.selected_answer === qwestion.correct_answer,
  ).length;
export const {
  setEndQwiz,
  handlePlayAgain,
  setQuestionsList,
  setQwizStart,
  selectAnswer,
} = qwizSlice.actions;
