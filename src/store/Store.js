import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice
    }
})