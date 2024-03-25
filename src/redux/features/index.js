import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: '',
    description: '',
    image: '',
    variant: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{}
})


export default productSlice.reducer;