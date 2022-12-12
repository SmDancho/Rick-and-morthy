import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dataSlice from "./getCharactersData";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = () =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },

  middleware: (getDefaultMiddleware) => customizedMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
