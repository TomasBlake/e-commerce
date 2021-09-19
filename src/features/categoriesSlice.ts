import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";
import { clientSnipCard } from "../client";
import { Category } from "../Types";

export interface CategoriesError {
    message: string;
}

export interface CategoriesState {
    categories: Category[];
    isLoading: boolean;
    error?: CategoriesError;  
}

const initialState: CategoriesState = {
    categories: [],
    isLoading: false
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setLoading: (state, {payload} : PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setCategoriesSuccess : (state, {payload} : PayloadAction<Category[]>) => {
            state.categories = payload
        },
        setCategoriesFaild: (state, {payload} : PayloadAction<CategoriesError>) => {
            state.error = payload
        }
    }
});

export const { setCategoriesSuccess, setCategoriesFaild, setLoading } = categoriesSlice.actions;

export const categoriesSelector = (state: RootState) => state.categories;

export const getCategories = () : AppThunk => async(dispatch) => {
    try {
        dispatch(setLoading(true));
        const categories = await clientSnipCard.get("") as Category[]; // TO-DO
        dispatch(setCategoriesSuccess(categories));
    } catch (error) {
        dispatch(setCategoriesFaild(error));
    } finally {
        dispatch(setLoading(false));
    }
}

export default categoriesSlice.reducer;