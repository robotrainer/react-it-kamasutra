import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
