import TodoButton from "./todobutton";
// import "./../../styles/todo.css";

const Todolist = () => {
  return (
    <div className="h-90vh bg-todolist col ">
      <div className="d-flex flex-row ">
        <div className="d-flex flex-column  w-maxp ">
          <div className="bg-Accent d-flex text-center px-5px justify-content-center">
            <h4>To-do List</h4>
          </div>
          <div className="p-5px  d-flex flex-column gap-2 ">
            <TodoButton idnum="1" todonam="sample" />
            <TodoButton idnum="2" todonam="sample2" />
            <TodoButton idnum="3" todonam="ready merienda" />
            <TodoButton idnum="2" todonam="todolist something" />
            <TodoButton idnum="2" todonam="sample2" />
            <TodoButton idnum="2" todonam="sample2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todolist;
