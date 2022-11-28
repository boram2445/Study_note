import { Routes, Route, Navigate } from "react-router-dom";
import AddPostForm from "./features/post/AddPostForm";
import PostsList from "./features/post/PostsList";
import SinglePostPage from "./features/post/SinglePostPage";
import Layout from "./components/Layout";
import EditPostForm from "./features/post/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index는 현재까지의 경로를 의미한다. */}
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* catch all - 원하면 404 컴포넌트를 넣을 수 있다.  */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
