import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://www.ejin.ru/wp-content/uploads/2019/05/kanada.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My Post
        <div>New post</div>
        <div className="posts">
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
