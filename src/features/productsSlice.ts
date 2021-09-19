import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";
import { clientSnipCard } from "../client";
import { Product, ProductsResponse, SnipcardError } from "../Types";

export interface ProductsState {
    products: Product[];
    isLoading: boolean;
    error?: SnipcardError;
}

const initialState: ProductsState = {
    products: [],
    isLoading: false
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLoading: (state, {payload} : PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setProductsSuccess: (state, {payload} : PayloadAction<Product[]>) => {
            state.products = payload;
        },
        setProductsFaild: (state, {payload} : PayloadAction<SnipcardError>) => {
            state.error = payload;
        },
        setProductSuccess: (state, {payload} : PayloadAction<Product>) => {
            const products = state.products.filter(prod => {
                return prod.id !== payload.id
            });
            state.products = [...products, payload];
        },
        setProductFaild: (state, {payload}: PayloadAction<SnipcardError>) => {
            state.error = payload;
        }
    }
});

const { setLoading, setProductsSuccess, setProductsFaild, setProductSuccess, setProductFaild } = productsSlice.actions;

export const productsSelector = (state : RootState) => state.productsState.products;
export const productSelector = (state : RootState, id: string) => state.productsState.products.find(product => product.id === id);

export const getProduct = (id: string): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientSnipCard.get<Product>("/params", {
            params: {
                id
            }    
        })
        const product = response.data;
        dispatch(setProductSuccess(product));
    } catch (error) {
        dispatch(setProductFaild(error));
    } finally {
        dispatch(setLoading(false));
    }
}

export const getProducts = (
    limit?: number, 
    offset?: number, 
    from?: Date, 
    to?: Date, 
    orderedBy?: "nbrSales" | "salesValue" | "creationDate"
    ): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientSnipCard.get<ProductsResponse>("/products", { 
            params: {
                limit,
                offset,
                from,
                to,
                orderedBy 
            }
        });
        const products = response.data.items;
        dispatch(setProductsSuccess(products));
    } catch (error) {
        dispatch(setProductsFaild(error));
    } finally {
        dispatch(setLoading(true));
    }
}

export default productsSlice.reducer;
