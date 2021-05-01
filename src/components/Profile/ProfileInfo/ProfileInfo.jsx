import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://www.ejin.ru/wp-content/uploads/2019/05/kanada.jpg" />
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
