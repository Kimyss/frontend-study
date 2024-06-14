import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList:
    [{
      id: "1",
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: "3",
      title: "Aerus Z",
      price: 199000,
      count: 1
    }]
};

// 장바구니 정보를 담을 Slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 수량을 변경하는 리듀서 만들기
    // QUiz: 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 감소
    increaseCount: (state, action)=>{
      const targetItem = state.cartList.find((cartItem)=>{
        return cartItem.id === action.payload;
      });
      targetItem.count += 1;
    },
    decreaseCount: (state, {payload : prodcutId}) => {
      const targetItem = state.cartList.find((cartItem)=>{
        return cartItem.id === prodcutId;
      });
      targetItem.count -= 1;
    }
  }
  });

export const selectcartList = state => state.cart.cartList;

export const {increaseCount, decreaseCount} = cartSlice.actions;  //액션생성함수 내보내

export default cartSlice.reducer;