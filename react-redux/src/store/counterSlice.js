import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter", //모든 slice는 name이 있어야 한다.
  initialState, //초기상태를 설정해 준다
  reducers: {
    increment(state) {
      state.counter++; //state값 직접적인 수정 가능
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggleCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
