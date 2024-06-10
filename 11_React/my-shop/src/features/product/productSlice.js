import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  productList: [],  // 상품목록 초기값 빈배열
  selectedProduct: null,
};

// 상품 정보를 담을 slice만들기
const productSlice = createSlice({
  name : 'product',
  initialState,
  reducers: {
    getAllProdcuts: (state, action)=>{
      console.log(state);
      state.selectedProduct  = action.payload;
    }
  }
});

// 액션 생성 함수
export const {getAllProdcuts} =  productSlice.actions; 


// 리듀서 함수들 내보내기
export default productSlice.reducer;
