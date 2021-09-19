import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../app/store";
import { clientSnipCard } from "../client";
import { Customer, SnipcardError } from "../Types";

export interface CustomerState {
    customer?: Customer;
    error?: SnipcardError;
    isLoading: boolean;
}



const initialState: CustomerState = {
    isLoading: false
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        isLoading: (state, {payload} : PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setCustomerSuccess: (state, {payload} : PayloadAction<Customer>) => {
            state.customer = payload;
        },
        setCustomerFaild: (state, {payload} : PayloadAction<SnipcardError>) => {
            state.error = payload;
        }
    }
});

export const {isLoading, setCustomerSuccess, setCustomerFaild} = customerSlice.actions;

export const getCustomer = (id: string) : AppThunk => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const response = await clientSnipCard.get<Customer>("/customers", {
            params: {
                id
            }
        })
        const customer = response.data;
        dispatch(setCustomerSuccess(customer));
    } catch (error) {
        dispatch(setCustomerFaild(error));
    } finally {
        dispatch(isLoading(false));
    }
}

export default customerSlice;