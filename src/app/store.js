import { configureStore } from "@reduxjs/toolkit";
import productSlicer from "../pages/Product/productSlice1.js"
import cartSlicer from "../pages/cart/cartSlice.js"
import authSlicer from "../pages/Authorisation/Authslice1.js"
import categoryReducer from "../pages/category/categorySlice.js"
import productdetailslicer from "../pages/productdetails/productdetailslice.js"

const store=configureStore({
    reducer:{
        product:productSlicer,
        cart:cartSlicer,
        auth:authSlicer,
        category: categoryReducer,
        productdetail:productdetailslicer

    },
})
export default store