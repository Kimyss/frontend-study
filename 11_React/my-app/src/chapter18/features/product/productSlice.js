import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList:[],
};

const productSlice = createSlice({
  name : 'product',
  initialState,
  reducers:{
    addToProductList:(state, action)=>{
      console.log(action);
      state.productList.push(action.payload);
    },
  }
});

console.log(productSlice);

export const {addToProductList}  = productSlice.actions;

export const selectProductList = (state) => {
  return state.product.productList}

export default productSlice.reducer;

