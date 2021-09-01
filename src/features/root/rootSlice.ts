import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IRootState {

}

const initialState: IRootState = {

}

export const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {

    }
});

export const {} = rootSlice.actions;

export const rootState = (state: RootState) => state;

export default rootSlice.reducer;