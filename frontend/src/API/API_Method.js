import axios from "axios";
import moment from "moment";
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
      // console.log(res);
      //   console.log(res.data.payload);
      //   settodo(res.data.payload);
      //   localStorage.setItem("todofocus", JSON.stringify(res.data.payload));
      //   return res.data.payload;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const loging = (user_id, user_token, status) => {
  axios
    .post(Baseurl + "user/logout", {
      user_id,
      user_token,
      user_status: status,
    })
    .then((res) => {
      // console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
export const sessionin = (user_id, user_token, set_session_id) => {
  axios
    .post(Baseurl + "user/session/in", {
      user_id,
      user_token,
    })
    .then((res) => {
      // console.log("here is the session in");
      // console.log(res.data.payload);
      // console.log(res.data.payload.user_session_id);
      set_session_id(res.data.payload.user_session_id);
    })
    .catch((e) => {
      console.log(e);
    });
};
export const sessionout = (user_id, user_token, user_session_id) => {
  axios
    .post(Baseurl + "user/session/out", {
      user_id,
      user_token,
      user_session_id,
    })
    .then((res) => {
      // console.log(res);
      // console.log("here is the session in");
      // console.log(res.data.payload);
      // console.log(res.data.payload.user_session_id);
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getstatus = (
  user_id,
  user_token,
  setChartData,
  setuser_status
) => {
  axios
    .post(Baseurl + "user/logs/status", {
      user_id,
      user_token,
    })
    .then((res) => {
      console.log(moment().day(res.data.payload.label[0]));
      console.log(res.data.payload);
      const payload = res.data.payload;
      setuser_status({
        todo_done_today: payload.todo_done_today,
        todo_done_7days: payload.todo_done_7days,
        time_log_today: payload.time_log_today,
        time_log_7day: payload.time_log_7day,
      });
      setChartData({
        labels: payload.label,
        datasets: [
          {
            label: "Finish",
            data: payload.data,
            backgroundColor: ["#ffd36a"],
          },
        ],
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
