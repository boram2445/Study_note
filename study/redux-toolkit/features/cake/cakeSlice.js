//react가 아니라 js환경에서만 하고 있어서 import문을 사용할 수 없다.
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

//Slice - actions와 reducer를 한꺼번에 생성할 수 있다.
//세가지 속성 지정 - 속성의 이름,state초기값,reducers(object)
const cakeSlice = createSlice({
  name: "cake",
  initialState, //key와 value가 동일하면 이렇게 생략 가능하다
  reducers: {
    //새로운 state를 반환할 필요가 없고 직접적으로 업데이트가 가능하다.(해당 라이브러리가 도와준다)
    ordered: (state) => {
      state.numOfCakes--;
    },
    //action은 어디있을까? - rtk는 action creator를 자동으로 만들어지기 때문에 따로 작성할 필요가 없다.
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

//react가 아니라서 이렇게 쓰는듯
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
