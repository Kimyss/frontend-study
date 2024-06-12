import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null,
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.productList = action.payload;
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct : (state)=>{
      state.selectedProduct = null;
    }
    
  }
});


// 액션 생성 함수
export const {
  getAllProducts,
  getSelectedProduct, 
  clearSelectedProduct 
} = productSlice.actions;

// 선택자 함수
export const selectproductList = (state) => state.product.productList;
// 위에 getAllProducts: (state, action) state랑 다름

export const selectSelectproductList = (state) => state.product.selectedProduct;



// 리듀서 함수들
export default productSlice.reducer;
