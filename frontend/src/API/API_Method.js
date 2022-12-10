import axios from "axios";
import { useHomeContext } from "../components/context/useHomeContext";
import { Baseurl } from "./Config";

export const gettask = (user_id, user_token, todo_id, settodo) => {
  axios
    .post(Baseurl + "user/todolist/specific/task", {
      user_id,
      user_token,
      todo_id,
    })
    .then((res) => {
      //   console.log(res.data.payload);
      settodo(res.data.payload);
      //   localStorage.setItem("todofocus", JSON.stringify(res.data.payload));
      //   return res.data.payload;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const settask = (user_id, user_token, todo_id, settodo) => {
  axios
    .post(Baseurl + "user/todolist/specific/settask", {
      user_id,
      user_token,
      todo_id,
    })
    .then((res) => {
      //   console.log(res.data.payload);
      settodo(res.data.payload);
      //   localStorage.setItem("todofocus", JSON.stringify(res.data.payload));
      //   return res.data.payload;
    })
    .catch((e) => {
      console.log(e);
    });
};
