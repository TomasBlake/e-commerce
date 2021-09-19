import { combineReducers } from "@reduxjs/toolkit";
import categories from "../features/categoriesSlice";
import auth from "../features/authSlice";
import orders from "../features/ordersSlice";
import productsState from "../features/productsSlice";

const rootReducer = combineReducers({
    categories,
    auth,
    orders,
    productsState
}); 

export default rootReducer;