import { AnyAction, createSlice, isAsyncThunkAction, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";
import { clientSnipCard, clientStrapi } from "../client";
import { Product, SnipcartError } from "../Types";

export interface ProductsState {
    products: Product[];
    isLoading: boolean;
    error?: any;
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
        setProductsFaild: (state, {payload} : PayloadAction<SnipcartError>) => {
            state.error = payload;
        },
        setProductSuccess: (state, {payload} : PayloadAction<Product>) => {
            const products = state.products.filter(prod => {
                return prod.id !== payload.id
            });
            state.products = [...products, payload];
        },
        setProductFaild: (state, {payload}: PayloadAction<any>) => {
            state.error = payload;
        }
    }
});

const { setLoading, setProductsSuccess, setProductsFaild, setProductSuccess, setProductFaild } = productsSlice.actions;

export const productsSelector = (state : RootState) => state.products.products;
export const productSelector = (state : RootState, id: string) => state.products.products.find(product => product.id === id);

export const getProduct = (token: string): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientSnipCard.get<Product>("/params", {
            params: {
                token
            }    
        })
        const product = response.data;
        dispatch(setProductSuccess(product));
    } catch (error) {
        dispatch(setProductFaild(error as SnipcartError));
    } finally {
        dispatch(setLoading(false));
    }
}

/*export const getProductsFromStrapi = (    
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
        dispatch(setProductsFaild(error as SnipcartError));
    } finally {
        dispatch(setLoading(true));
    }
}*/

export const getProductsFromStrapi = (): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await clientStrapi.get("/products", { 
            params: {
              
            }
        });
        console.log("[RESPONSE_FROM_STRAPI]:", response); 
        const products = response.data;
    
        dispatch(setProductsSuccess(products));
    } catch (error) {
        dispatch(setProductsFaild(error as any));
    } finally {
        dispatch(setLoading(true));
    }
}

export default productsSlice.reducer;
