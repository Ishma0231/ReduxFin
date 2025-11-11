import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    return res.json();
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    selectedCategory: null,
  },
  reducers: {
    selectCategory(state, action) {
    state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { selectCategory } = categorySlice.actions;
export const selectCategories = (state) => state.category.categories;
export const selectSelectedCategory = (state) => state.category.selectedCategory;
export default categorySlice.reducer;
