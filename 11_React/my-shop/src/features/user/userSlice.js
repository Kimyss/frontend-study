import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUserInfo: null
};

// 로그인한 유저 정보를 담을 slice만들기
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    loginSuccess: (state, { payload:user }) =>{
      state.loginUserInfo = user;
    },
    logoutSuccess: (state) =>{
      state.loginUserInfo = null;
      localStorage.removeItem('user');
    }
  }
});

export const {loginSuccess, logoutSuccess} = userSlice.actions;

export const selectUser = state => state.user.loginUserInfo;

export default userSlice.reducer;