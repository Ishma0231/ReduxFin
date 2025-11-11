import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk(
    "products/fetchProducts",
    async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data=res.json();
    return data
}
);

const ProductSlice=createSlice({
    name:"product",
    initialState:{items:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.items=action.payload;

        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.loading=false;
            state.error="Failed to load products"
        })
    }
})
export default ProductSlice.reducer;