import { combineReducers } from "@reduxjs/toolkit";
import categories from "../features/categoriesSlice";
// import auth from "../features/authSlice";
import orders from "../features/ordersSlice";
import products from "../features/productsSlice";
import customer from "../features/customersSlice";
import users from "../features/userSlice";   

const rootReducer = combineReducers({
    categories,
    orders,
    products,
    customer,
    users,
}); 

export default rootReducer;