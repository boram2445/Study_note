import React from "react";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
// import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";

let PostsExcerpt = ({ post }) => {
  return (
    <article key={post.id}>
      <h2>{post.title}</h2>
      {/* 부분 문자열 반환 */}
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        {/* <TimeAgo timestamp={post.date} /> */}
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
