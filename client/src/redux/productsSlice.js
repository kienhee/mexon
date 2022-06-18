import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../axios-customize'


export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const response = await axios.get('/api/v1/products')
        return response
    }
)

const initialState = {
    listProducts: [],
    loading: false,
}

const productsSlice = createSlice({
    name: 'users',
    initialState,
    // reducers: {
    //     // standard reducer logic, with auto-generated action types per reducer
    // },
    extraReducers: (builder) => {

        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.listProducts = action.payload

        })
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false;
        })
    },
})
export default productsSlice.reducer