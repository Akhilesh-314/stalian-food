import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CardSlice"
import CategorySlice from "./Slices/CategorySlice";
import SearchSlice from  "./Slices/SearchSlice";
const Store = configureStore({
    reducer:{
    cart: CartSlice,
    category:CategorySlice,
    search:SearchSlice
    }
});
export default Store;