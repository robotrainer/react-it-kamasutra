import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path} activeClassName={classes.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
