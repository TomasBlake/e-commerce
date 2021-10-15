import { ThunkDispatch } from "redux-thunk";
import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch, AppThunk } from "./app/store";
import store from "./app/store";
import { getProduct, getProductsFromStrapi,  } from "./features/productsSlice";
import { Product } from "./Types";
import { getCategories } from "./features/categoriesSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useGetProductsStrapi = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProductsFromStrapi());
    },[dispatch]); 
}

export const useGetProduct = (token: string) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProduct(token))
    }, [dispatch]);
}

export const useGetCategories = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCategories())
    },[dispatch]);
}