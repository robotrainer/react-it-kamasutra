import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>New post</div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likesCount="30" />
        <Post message="It's my first post" likesCount="50" />
        <Post message="Всё круто!" likesCount="450" />
      </div>
    </div>
  );
};

export default MyPosts;
