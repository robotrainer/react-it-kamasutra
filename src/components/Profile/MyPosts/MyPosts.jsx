import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likes} key={post.id} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
