import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit"
import categoriesReducer from "../features/categoriesSlice";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

export default store;