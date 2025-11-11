import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductById=createAsyncThunk(
     'product/fetchById',
     async(id)=>{
        const res=await fetch(`https://fakestoreapi.com/products/${id}`)
        const data=await res.json();
        return data
     }
)

const productdetailSlice = createSlice({
  name: 'productdetail',
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default productdetailSlice.reducer