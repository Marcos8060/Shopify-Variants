import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../redux/features/index'

export const store = configureStore({
    reducer: {
        product: ProductReducer
    }
})