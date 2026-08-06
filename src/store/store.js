import { configureStore } from "@reduxjs/toolkit";
import { qwizReducer } from "./qwizSlice";
import { baseApi } from "./../api/baseApi";

export const store = configureStore({
  reducer: {
    qwiz: qwizReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
