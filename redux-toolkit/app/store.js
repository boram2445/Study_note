//redux에서는 createStore을 했다면, rtk에서는 configureStore을 쓴다.
const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReduer = require("../features/user/userSlice");

// const logger = reduxLogger.createLogger();

//redux에서 combineReducers기능도 함께 사용할 수 있는 것이다.
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReduer,
  },
  //configurestore가 자동으로 middleware를 store에 셋팅해준다.
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
