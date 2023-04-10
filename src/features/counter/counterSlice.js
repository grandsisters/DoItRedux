import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
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
      // action.payload 는 해당 액션과 같이 전달하는 값을 의미합니다.
      // 예를 들어, setName(value) 와 같이 액션을 호출하는 코드를 작성했다면 action.payload 값에는 value 가 담기게 됩니다.
      // incrementByAmount(incrementValue) 라는 코드를 작성했으니 action.payload 값은 incrementValue가 됩니다.
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// useSelector의 값으로 아래와 같이 넣어줍니다.
// state.모듈명.가져올값 과 같이 넣어줍니다.
// 결과적으로 가져오는 값은 counter라는 이름의 슬라이스의 초기 상태값의 value입니다.
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
