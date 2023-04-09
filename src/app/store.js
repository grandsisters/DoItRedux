import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// configureStore는 리덕스의 createStore를 추상화 한 것입니다.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
