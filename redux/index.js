// import redux from 'redux'; - 리덕스 store를 불러온다.
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//cake 주문 action을 반환하는 함수
function orederCake() {
  //action - 객체
  return {
    type: CAKE_ORDERED,
    payload: 1, //원하는 변수를 넣을 수 있다.
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

//아이스크림 주문
function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

//아이스크림 재고 채우기
function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

//reducers에 보내지는 state는 object형태여야 한다.
// const initialState = {
//   numOfCakes: 10,
//   numofIceCream: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

//reducers - (previousState, action)을 받고 newState반환
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        //다른 값은 나두고 numOfCakes 만 바꾸는 방법
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        //action key에 접근 방식 , redux에서는 action에서 보내는 값을 payload라고 한다.
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

//reducer 합치기
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
//state가 변경될때마다 기록 - 케이크 갯수 기록
// const unsubscribe = store.subscribe(() =>
//   // console.log("update state", store.getState())
// );
//dispatch 메서드로 action에 접근하고 store에 요청을 보낸다 - 케이크 구매
// store.dispatch(orederCake());
// store.dispatch(orederCake());
// store.dispatch(orederCake());
// store.dispatch(restockCake(5));
const actions = bindActionCreators(
  { orederCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orederCake();
actions.orederCake();
actions.orederCake();
actions.restockCake(5);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);
//subscribe 메서드를 종료한다. - 케이크 구매 기록 종료
unsubscribe();
