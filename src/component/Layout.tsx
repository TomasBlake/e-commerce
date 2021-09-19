import React from "react";
import { authSelector } from "../features/authSlice";
import { categoriesSelector } from "../features/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import Footer from "./Footer";
import Header from "./Header";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({children} : IProps) => {
    const dispatch = useAppDispatch();
    const { currentUser, isLoading, error, isAuth } = useAppSelector(authSelector);
    const { categories, isLoading, error } = useAppSelector(categoriesSelector)
    
    return (
        <>
        <Header/>
            {children}
        <Footer/>
        </>
    );
}

export default Layout;