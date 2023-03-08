import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";

import PostsExerpt from "./PostsExcerpt";

function PostsList() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = posts.map((post) => <PostsExerpt key={post.id} post={post} />);
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return <section>{content}</section>;
}

export default PostsList;
