// import { configureStore } from "@reduxjs/tookit";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import sliceReducer from "./slices/slice";

const reducer = {
    sliceReducer
}

export const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();