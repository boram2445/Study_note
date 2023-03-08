const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

//복잡한 state
const initialState = {
  name: "Boram",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

//1. action 함수 생성
const STREET_UPDATE = "STREET_UPDATE";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      //immer - produce(현재 state, 상태의 사본을 전달하는 함수)
      //변경하고 싶은 것만 이렇게 함수 를 이용해서 변경할 수 있다.
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(updateStreet("456 Main St"));
unsubscribe();
