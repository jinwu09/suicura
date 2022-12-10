import { useHomeContext } from "../context/useHomeContext";
import Status from "./Status";
import moment from "moment";

const CenterContent = () => {
  const { isdashboard } = useHomeContext();
  return (
    <div>
      <div className="d-flex flex-column bg-content border-radius-15px w-90p h-98p m-2 p-3">
        {isdashboard ? <Status /> : <Todoexpand />}
      </div>
    </div>
  );
};
const Todoexpand = () => {
  const { tododetail, settododetail, onsettask, getlist, liststatus } =
    useHomeContext();
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Task Name</h1>
        <div className="d-flex gap-3 ">
          <p>date created:</p>
          <p>
            {moment(String([tododetail.todo_created])).format(
              "dddd, MMMM Do YYYY"
            )}
          </p>
        </div>
      </div>
      <input
        type="text"
        value={tododetail.todo_name}
        onChange={(e) => {
          // let newArr = tododetail;
          // newArr.todo_name = e.target.value;
          // settododetail(newArr);

          settododetail(() => {
            let newArr = tododetail;
            newArr.todo_name = e.target.value;
            settododetail(newArr);
          });

          // settododetail_name(e.target.value);
          console.log(tododetail);
        }}
      />
      <h3>Description</h3>
      <textarea
        type="text"
        value={tododetail.todo_description}
        className="w-maxp h-75"
        onChange={(e) => {
          // let newArr = tododetail;
          // newArr.todo_description = e.target.value;
          // settododetail(newArr);

          settododetail(() => {
            let newArr = tododetail;
            newArr.todo_description = e.target.value;
            settododetail(newArr);
          });
          console.log(tododetail);
        }}
      />
      <button
        className="bg-Accent p-2 rounded-3"
        onClick={() => {
          onsettask(tododetail.todo_id);
          getlist(liststatus);
          getlist(liststatus);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default CenterContent;
