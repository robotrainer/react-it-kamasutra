import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://images.chesscomfiles.com/uploads/v1/user/53289452.74bc4f40.1200x1200o.27da855ed42f.jpeg" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
