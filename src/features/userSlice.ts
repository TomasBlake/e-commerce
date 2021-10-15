import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../app/store";
import { clientSnipCard } from "../client";
import { Customer, SnipcartError } from "../Types";

export interface User {
    token: string,
    expires: Date;
    customer: Customer;
};

export interface UserState {
    user?: User;
    error?: SnipcartError;
    isLoading: boolean;
};

const initialState: UserState = {
    isLoading: false
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoading: (state, {payload} : PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setUserSessionSuccess: (state, {payload} : PayloadAction<User>) => {
            state.user = payload;
        },
        setUserSessionFaild: (state, {payload} : PayloadAction<SnipcartError>) => {
            state.error = payload;
        }
    }
});

export const {setLoading, setUserSessionSuccess, setUserSessionFaild} = userSlice.actions;

export const getUserSession = (token: string) : AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientSnipCard.get("/usersessions", {
            params: {
                token
            }
        })
        const user = response.data;
        dispatch(setUserSessionSuccess(user));
    } catch (error) {
        dispatch(setUserSessionFaild(error as SnipcartError));
    } finally {
        dispatch(setLoading(false));
    }
}

export const userSelector = (state: RootState) => state.users;

export default userSlice.reducer;