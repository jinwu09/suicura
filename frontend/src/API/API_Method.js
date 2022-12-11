import axios from "axios";
import { Baseurl } from "./Config";

export const gettask = async (user_id, user_token, todo_id, settodo) => {
  await axios
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
export const settask = (
  user_id,
  user_token,
  todo_id,
  todo_description,
  todo_name
) => {
  axios
    .post(Baseurl + "user/todolist/specific/settask", {
      user_id,
      user_token,
      todo_id,
      todo_description,
      todo_name,
    })
    .then((res) => {
      console.log(res);
      //   console.log(res.data.payload);
      //   settodo(res.data.payload);
      //   localStorage.setItem("todofocus", JSON.stringify(res.data.payload));
      //   return res.data.payload;
    })
    .catch((e) => {
      console.log(e);
    });
};
