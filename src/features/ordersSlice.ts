import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";
import { clientSnipCard } from "../client";
import { Order, SnipcartError } from "../Types";

export interface OrdersResponse {
    totalItems: number;
    offset: number;
    limit: number;
    items: Order[]
}

export interface OrdersState {
    orders: Order[];
    isLoading: boolean;
    error?: SnipcartError;
    order?: Order;
}

const initialState: OrdersState = {
    orders: [],
    isLoading: false
}

export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setLoading: (state, {payload} : PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setOrdersSuccess: (state, {payload} : PayloadAction<Order[]>) => {
            state.orders = payload;
        },
        setOrdersFaild: (state, {payload} : PayloadAction<SnipcartError>) => {
            state.error = payload;
        },
        setOrderSuccess: (state, {payload} : PayloadAction<Order>) => {
            state.order = payload;
        },
        setOrderFaild: (state, {payload} : PayloadAction<SnipcartError>) => {
            state.error = payload;
        }
    }
})

export const { setLoading, setOrdersSuccess, setOrdersFaild, setOrderSuccess, setOrderFaild } = ordersSlice.actions;

export const ordersSelector = ( state: RootState ) => state.orders.orders;

export const getOrders = () : AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientSnipCard.get<OrdersResponse>("/orders");
        const orders = response.data.items;
        dispatch(setOrdersSuccess(orders));
    } catch (error) {
        dispatch(setOrdersFaild(error as SnipcartError));
    } finally {
        dispatch(setLoading(false));
    }
}

export const getOrder = (token: string) : AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientSnipCard.get<Order>("/orders", {
            params: {
                token
            }
        }) 
        const order = response.data;
        dispatch(setOrderSuccess(order));
    } catch (error) {
        dispatch(setOrderFaild(error as SnipcartError));
    } finally {
        dispatch(setLoading(false));
    }
}

export const putOrder = (
    token: string, 
    status?: "InProgress" | "Processed" | "Disputed" | "Shipped" | "Delivered" | "Pending" | "Cancelled", 
    paymentStatus?: "Paid" | "Deferred" | "PaidDeferred" | "ChargedBack" | "Refunded" | "Paidout" | "Failed" | "Pending" | "Expired" | "Cancelled" | "Open" | "Authorized", 
    tranckingNumber?: string, 
    trackingUrl?: string, 
    metadata?: { [key:string] : unknown} 
    ) : AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientSnipCard.put<Order>("/orders", {
            params: {
                token,
                status,
                paymentStatus,
                tranckingNumber,
                trackingUrl,
                metadata
            }
        })
        const order = response.data;
        dispatch (setOrderSuccess(order));
    } catch (error) {
        dispatch(setOrderFaild(error as SnipcartError));
    } finally {
        dispatch(setLoading(false));
    }
}

export const orderSelector = ( state: RootState ) => state.orders.order;

export default ordersSlice.reducer;