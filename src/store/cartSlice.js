import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react";
const Totalitems=()=>{
  const [quanity,setQuantity]=useState(2)
}

const initialState = {
  carts: [],
  status: "",
 
  

}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {
state.carts = [...state.carts,action.payload]
console.log(action)
           
      localStorage.setItem("cart", JSON.stringify(state.carts));
        },

        // remove perticular iteams
        removeFromCart(state, action) {
          const updatedCart = state.carts.filter((p) => p.id !== action.payload.id);
          state.carts = updatedCart;
        },
        // remove single iteams
        removeSingleIteams:(state,action)=>{
            
        },

        // clear cart
        emptycartIteam:(state,action)=>{
          state.carts = [];
        },
       

       
         
        
    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam,incrementProduct,reduceProduct,quanity,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;