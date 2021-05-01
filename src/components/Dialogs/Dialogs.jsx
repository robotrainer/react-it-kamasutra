import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    {
      id: 1,
      name: "Tanya",
    },
    {
      id: 2,
      name: "Mama",
    },
    {
      id: 3,
      name: "Misha",
    },
  ];

  let messagesData = [
    {
      id: 1,
      message: "Привет!",
    },
    {
      id: 2,
      message: "Hi",
    },
    {
      id: 3,
      message: "Как дела?",
    },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
        {/* <DialogItem
          dialogName={dialogsData[0].name}
          pageId={dialogsData[0].id}
        />
        <DialogItem
          dialogName={dialogsData[1].name}
          pageId={dialogsData[1].id}
        />
        <DialogItem
          dialogName={dialogsData[2].name}
          pageId={dialogsData[2].id}
        /> */}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        {/* <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message="Hi" />
        <Message message="Hi" /> */}
      </div>
    </div>
  );
};

export default Dialogs;
