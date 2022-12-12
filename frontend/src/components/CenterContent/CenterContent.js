import { useHomeContext } from "../context/useHomeContext";
import Status from "./Status";
import moment from "moment";
import "../../styles/boxdescription.css";

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
    <div className="box">
      <div className="d-flex justify-content-between">
        <h2 className="title">Task Name</h2>
        <div className="d-flex gap-3 ">
          <p className="datecreated1">Date created:</p>
          <p className="datecreated2">
            {moment(String([tododetail.todo_created])).format(
              "dddd, MMMM Do YYYY"
            )}
          </p>
        </div>
      </div>
      <input
        className="text-css1"
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
      <h3 className="desc">Description</h3>
      <div className="text-css2">
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
      </div>
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
