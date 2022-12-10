import { useState } from "react";
import { createContext } from "react";
import { gettask } from "../../API/API_Method";

export const HomeContext = createContext(null);

export function HomeProvider({ children }) {
  const [tododetail, settododetail] = useState({
    todo_archived: null,
    todo_created: "2022-12-07 14:03:35",
    todo_description: "",
    todo_id: 34,
    todo_name: "hance form todo",
    todo_status: 0,
  });
  const [isdashboard, setisdashboard] = useState(true);
  const ongettask = (todo_id) => {
    const m = JSON.parse(localStorage.getItem("m"));
    const user_id = m.user_id;
    const user_token = m.token;
    gettask(user_id, user_token, todo_id, settododetail);
  };
  const settododetail_name = (name) => {
    let newArr = tododetail;
    newArr.todo_name = name;
    settododetail(newArr);
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
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
