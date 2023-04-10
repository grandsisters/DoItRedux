import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// redux에서는 createStore를 이용하여 store 생성을 하였으나 redux-toolkit에선 configureStore는로 store를 생성합니다.
// configureStore는 리덕스의 createStore를 추상화 한 것입니다.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
