import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import dataSlice from "./getData/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(dataSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
