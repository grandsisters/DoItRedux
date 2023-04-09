# Do It Redux

## configureStore란?

configureStore는 리덕스의 createStore를 추상화 한 것입니다. <br/>
리덕스의 번거로운 설정 과정을 자동화 해주며, 이 안에는 reducer, middleware, devTools, preloadedState, enhancers를 정의해줄 수 있습니다.

## createSlice란?

리덕스 툴킷에서 제공하는 가장 기본적이고 표준적인 접근 방법입니다. <br/>
리듀서 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아들이고 해당 액션 생성자와 액션 유형으로 슬라이스 리듀서를 자동으로 생성합니다

- action 타입 정의, action 생성 합수: Actions.js
- initial state 정의, reducer 함수: Reducers.js

이 전의 코드들은 위와 같은 구조를 가지고 있었습니다. <br/>
createSlice를 이용하면 action과 reducer를 하나의 파일에서 관리할 수 있습니다. <br/>
createAction, createReducer 함수가 내부적으로 사용되며, createSlice에 선언된 슬라이스 이름(아래 예시 코드의 name 부분)을 따라서 reducer와 action 생성자, action type을 자동으로 생성합니다
