import React from "react";
// import { authSelector } from "../features/authSlice";
import { categoriesSelector } from "../../features/categoriesSlice";
import { useAppSelector } from "../../hooks";
import Footer from "../Footer";
import Header from "../Header";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({children} : IProps) => {
   // const { currentUser, isLoading, error, isAuth } = useAppSelector(authSelector);
    const { categories} = useAppSelector(categoriesSelector)
    
    return (
        <>
        <Header/>
            {children}
        <Footer/>
        </>
    );
}

export default Layout;