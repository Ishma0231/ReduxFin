import { createSlice } from "@reduxjs/toolkit";
const saved=localStorage.getItem("cart")
const InitialCart=saved?JSON.parse(saved):[]

const cartSlice=createSlice({
    name:"cart",
    initialState:{cartItems:InitialCart},
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload;
            const itemExist=state.cartItems.find((item)=>item.id===product.id)
            if(itemExist){
                itemExist.quantity+=1;
            }
            else{
                state.cartItems.push({...product,quantity:1})
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        removeFromCart:(state,action)=>{
            const id=action.payload;
            const itemExist=state.cartItems.find((item)=>item.id===id)
            if(itemExist){
                itemExist.quantity-=1;
            }
            if(itemExist.quantity<=0){
                state.cartItems=state.cartItems.filter((item)=>item.id !==itemExist.id)
        }
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
      deleteItem:(state,action)=>{
           const id=action.payload;
           const itemExist=state.cartItems.find((item)=>item.id==id);
           if (itemExist){
            state.cartItems=state.cartItems.filter((item)=>item.id !== itemExist.id)
           }
           localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },
       clearCart:(state)=>{
            state.cartItems=[];
            localStorage.removeItem("cart");
      }

      
    }
});

export const selectTotalQuantity =(state)=>
    state.cart.cartItems.reduce((acc,item)=>acc+item.quantity,0)

export const selectTotalPrice=(state)=>
    state.cart.cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)


export const {addToCart,removeFromCart,deleteItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;