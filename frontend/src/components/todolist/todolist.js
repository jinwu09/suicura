import TodoButton from "./todobutton";
import { useEffect } from "react";
import { useHomeContext } from "../context/useHomeContext";
// import "./../../styles/todo.css";

const Todolist = () => {
  const {
    isdashboard,
    setisdashboard,
    setInputtodo,
    addtodo,
    getlist,
    value,
    inputtodo,
    ondelete,
    onarchive,
    todolist,
  } = useHomeContext();

  useEffect(() => {
    console.log("tests");
    getlist(0);
  }, [value]);

  return (
    <div className="h-maxp bg-todolist col ">
      <div className="d-flex flex-row ">
        <div className="d-flex flex-column  w-maxp ">
          <div className="todo-list-header bg-Accent d-flex text-center px-5px justify-content-center">
            <h4>To-do List</h4>
          </div>
          <button
            className={
              "  m-1 rounded-1 transition-all  " +
              (isdashboard ? "bg-active" : "bg-Accent")
            }
            onClick={() => {
              setisdashboard(true);
            }}
          >
            Dashboard
          </button>
          <div className="todo-input d-flex flex-row ">
            <input
              type="text"
              placeholder="Add todo"
              onChange={(e) => {
                setInputtodo(e.target.value);
              }}
            />
            <button
              className="bg-accentcontent m-2 p-2"
              onClick={() => addtodo(inputtodo, "", 0)}
            >
              Add
            </button>
          </div>
          <div className="status-button">
            <button
              className="bg-accentcontent  p-2"
              onClick={() => getlist(0)}
            >
              Ongoing
            </button>
            <button
              className="bg-accentcontent  p-2"
              onClick={() => getlist(1)}
            >
              Archived
            </button>
          </div>
          <div className="p-5px  d-flex flex-column gap-2 ">
            {todolist.map((obj, index) => {
              return (
                <TodoButton
                  key={index}
                  idnum={index + 1}
                  todo_id={obj.todo_id}
                  todonam={obj.todo_name}
                  onClickDelete={ondelete}
                  onClickArchive={onarchive}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todolist;
