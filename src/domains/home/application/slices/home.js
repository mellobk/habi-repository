import { createSlice } from "@reduxjs/toolkit";
import { userInfoInit } from "../constans/formsHomeFields";


const userInforStorage = window.localStorage.getItem('userInfo');

export const initialState = {
  userInfo: JSON.parse(userInforStorage) || userInfoInit,
  totalStep: [],
  actualStep: null,
  loading: false,
};

const Home = createSlice({
  name: "home",
  initialState,
  reducers: {
    setUserInfo(state, { payload }) {
      state.userInfo = { ...state.userInfo, ...payload };
	  window.localStorage.setItem('userInfo',JSON.stringify(state.userInfo));
    },
    setTotalStep(state, { payload }) {
      state.totalStep = payload;
    },
    setSActualStep(state, { payload }) {
      state.actualStep = payload;
    },
  },
});

export const { setUserInfo, setTotalStep, setSActualStep } = Home.actions;
export default Home.reducer;
