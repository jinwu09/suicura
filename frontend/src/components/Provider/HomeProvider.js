import { useState } from "react";
import { createContext } from "react";
import { gettask, settask } from "../../API/API_Method";
import axios from "axios";
import { Baseurl } from "../../API/Config";

export const HomeContext = createContext(null);

export function HomeProvider({ children }) {
  const [liststatus, setlistatus] = useState(0);
  const [tododetail, settododetail] = useState({
    todo_archived: null,
    todo_created: "2022-12-07 14:03:35",
    todo_description: "",
    todo_id: 34,
    todo_name: "hance form todo",
    todo_status: 0,
  });
  const [isdashboard, setisdashboard] = useState(true);
  const ongettask = async (todo_id) => {
    const m = JSON.parse(localStorage.getItem("m"));
    const user_id = m.user_id;
    const user_token = m.token;
    await gettask(user_id, user_token, todo_id, settododetail);
  };
  const onsettask = async (todo_id) => {
    const m = JSON.parse(localStorage.getItem("m"));
    const user_id = m.user_id;
    const user_token = m.token;
    settask(
      user_id,
      user_token,
      todo_id,
      tododetail.todo_description,
      tododetail.todo_name
    );
  };
  const settododetail_name = (name) => {
    let newArr = tododetail;
    newArr.todo_name = name;
    settododetail(newArr);
  };

  // migrated from todolist.js
  const [todolist, settodolist] = useState([
    { todo_id: 1, todo_name: "default" },
    { todo_id: 1, todo_name: "default" },
  ]);
  const [inputtodo, setInputtodo] = useState("");
  const [value, setValue] = useState("");
  const getlist = async (status) => {
    const m = JSON.parse(localStorage.getItem("m"));
    const user_id = m.user_id;
    const user_token = m.token;
    console.log(user_token);
    if (status === 0) {
      setlistatus(0);
      await axios
        .post(Baseurl + "user/todolist/ongoing", { user_id, user_token })
        .then((res) => {
          console.log(res);
          const datas = res.data.payload;
          console.log(datas);

          settodolist([...datas]);
        });
    } else if (status === 1) {
      setlistatus(1);
      axios
        .post(Baseurl + "user/todolist/archive", { user_id, user_token })
        .then((res) => {
          console.log(res);
          const data = res.data.payload;
          console.log(data);

          settodolist([...data]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const ondelete = (id) => {
    const m = JSON.parse(localStorage.getItem("m"));
    const user_id = m.user_id;
    const user_token = m.token;
    axios
      .post(Baseurl + "user/todolist/delete", {
        user_id,
        user_token,
        todo_id: id,
      })
      .then((res) => {
        // console.log(res);
        settodolist(todolist.filter((todo) => todo.todo_id !== id));
      });
  };
  const onarchive = (id) => {
    const m = JSON.parse(localStorage.getItem("m"));
    const user_id = m.user_id;
    const user_token = m.token;
    axios
      .post(Baseurl + "user/todolist/setarchive", {
        user_id,
        user_token,
        todo_id: id,
      })
      .then((res) => {
        // console.log(res);
        settodolist(todolist.filter((todo) => todo.todo_id !== id));
      });
  };
  const addtodo = (todo_name, todo_description, todo_status) => {
    const m = JSON.parse(localStorage.getItem("m"));
    const user_id = m.user_id;
    const user_token = m.token;

    axios
      .post(Baseurl + "user/todolist/create", {
        user_id,
        user_token,
        todo_name,
        todo_description,
        todo_status,
      })
      .then((res) => {
        console.log(res);
        getlist(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <HomeContext.Provider
      value={{
        tododetail,
        ongettask,
        settododetail,
        isdashboard,
        setisdashboard,
        settododetail_name,
        todolist,
        settodolist,
        inputtodo,
        setInputtodo,
        value,
        setValue,
        getlist,
        ondelete,
        onarchive,
        addtodo,
        onsettask,
        liststatus,
        setlistatus,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
