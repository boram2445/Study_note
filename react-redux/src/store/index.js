//1.redux를 import한다
import { createStore } from "redux";

export const INCREMENT = "increment";

//가독성을 높이기 위해 초기 상태를 상수에 저장한다.
const initialState = {
  counter: 0,
  showCounter: true,
};

//3. reducer function을 생성한다
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "TOGGLE":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

//2. store를 생성한다
const store = createStore(counterReducer);

//4. 컴포넌트가 redux store를 subscribe하도록 하기 위해서 store를 export한다.

export default store;
