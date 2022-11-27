import { Routes, Route } from "react-router-dom";
import AddPostForm from "./features/post/AddPostForm";
import PostsList from "./features/post/PostsList";
import SinglePostPage from "./features/post/SinglePostPage";
import Layout from "./components/Layout";
import EditPostForm from "./features/post/EditPostForm";

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
      </Route>
    </Routes>
  );
}

export default App;
