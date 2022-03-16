import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/reducer"


export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});