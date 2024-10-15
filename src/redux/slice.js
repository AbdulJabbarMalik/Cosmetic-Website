import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],

};
export const AddToCartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const { data, quan } = action.payload;
      console.log(data, quan, "inside data");

      //if already in cart then plus quantity
      const existingCart = state.cart.find((item) => item.data.id == data.id);
      if (existingCart) {
        console.log("item already exist");
        existingCart.quan += quan;
      }
      // else add the product to cart
      else {
        state.cart.push(action.payload);
      }
    },

    incrementQuan: (state , action) => {

      console.log(action.payload,"items ID")
      const existingCart = state.cart.find((item) => item.data.id == action.payload);
      existingCart.quan += 1;
      // state.value += 1;
    },
    
    decrementQuan: (state , action)=>{
      // state.value -= 1;
      console.log(action.payload,"items ID")
      const existingCart = state.cart.find((item) => item.data.id == action.payload);
      existingCart.quan > 1 ? existingCart.quan -= 1 : existingCart.quan  ;
    },
    deletItem: (state , action)=> {
      const existingCart = state.cart.find((item) => item.data.id == action.payload);
      state.cart.pop(existingCart)

    }
  },
});

// Action creators are generated for each case reducer function
export const { addTocart , incrementQuan , decrementQuan , deletItem  } = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
