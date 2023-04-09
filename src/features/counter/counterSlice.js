import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};
// createSlice는 리듀서 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아들이고 해당 액션 생성자와 액션 유형으로 슬라이스 리듀서를 자동으로 생성합니다
export const counterSlice = createSlice({
  name: 'counter', // 슬라이스 이름
  initialState, // 초기 상태 값
  reducers: { // 리듀서 함수의 객체
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// useSelector의 값으로 아래와 같이 넣어줍니다.
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
