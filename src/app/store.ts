import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import categoriesReducer from "../features/categoriesSlice";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";

const middleware = [logger];

const store = configureStore({
    reducer: rootReducer,
    middleware
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>

export default store;