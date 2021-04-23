import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>New post</div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" />
        <Post message="It's my first post" />
        <Post message="Всё круто!" />
      </div>
    </div>
  );
};

export default MyPosts;
