import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectPostByUser } from "../post/postsSlice";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  // //왜 이렇게 짠거지..? => 내부에서 state를 써서 값을 가져오려고
  // const postsForUser = useSelector((state) => {
  //   // filter는 새로운 배열을 항상 만들어낸다. 따라서 다른 컴포넌트가 렌더링되면 함께 userPage가 렌더링 된다.
  //   //헤더에서 count를 업데이트하면, useSelector가 다시 작동하고 filter도 다시 작동하게 된다.
  //   const allPosts = selectAllPosts(state);
  //   return allPosts.filter((post) => post.userId === Number(userId));
  // });

  //createSeletor을 사용한 새로운 코드
  const postsForUser = useSelector((state) =>
    selectPostByUser(state, Number(userId))
  );

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
}

export default UserPage;
