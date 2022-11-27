import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/post/postsSlice";
import usersReducer from "../features/users/usersSlice";

//리듀서 저장소
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
