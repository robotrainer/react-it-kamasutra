import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {
      id: 1,
      message: "Hi, how are you?",
      likes: 30,
    },
    {
      id: 2,
      message: "It's my first post",
      likes: 50,
    },
    {
      id: 3,
      message: "Всё круто!",
      likes: 450,
    },
    {
      id: 4,
      message: "sdgmsg",
      likes: 1000,
    },
  ];

  let postElement = posts.map((post) => (
    <Post message={post.message} likesCount={post.likes} />
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
      <div className={classes.posts}>
        {postElement}
        {/* <Post message={postsData[0].post} likesCount={postsData[0].likes} />
        <Post message={postsData[1].post} likesCount={postsData[1].likes} />
        <Post message={postsData[2].post} likesCount={postsData[2].likes} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
