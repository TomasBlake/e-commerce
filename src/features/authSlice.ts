import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Axios from "axios";
import { AppThunk, RootState } from "../app/store";
import { SnipcardError } from "../Types";

export interface AuthState {
    isAuth: boolean;
    currentUser?: CurrentUser;
    isLoading: boolean;
    error?: SnipcardError;
}

export interface CurrentUser {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
}

export const initialState: AuthState = {
    isAuth: false,
    isLoading: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, {payload} : PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setAuthSuccess: (state, {payload} : PayloadAction<CurrentUser>) => {
            state.currentUser = payload,
            state.isAuth = true
        },
        setLogOut: (state) => {
            state.isAuth = false
            state.currentUser = undefined
        },
        setAuthFailed: (state, { payload }: PayloadAction<SnipcardError>) => {
            state.error = payload
            state.isAuth = false
        },
    }
});

export const {setLoading, setAuthSuccess, setLogOut, setAuthFailed} = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export const login = () : AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const currentUser = await Axios.get("") as CurrentUser; // TO-DO
        dispatch(setAuthSuccess(currentUser));
    } catch (error) {
        dispatch(setAuthFailed(error));
    } finally {
        dispatch(setLoading(false));
    }
} 

export const logOut = () : AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await Axios.get(""); // TO-DO
        dispatch(setLogOut);
    } catch (error) {
        dispatch(setAuthFailed(error));
    } finally {
        dispatch(setLoading(false));
    }
}

export default authSlice.reducer;