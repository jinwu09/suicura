import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const TodoButton = ({ idnum, todonam, onClickArchive, onClickDelete }) => {
  return (
    <div className="d-flex justify-content-between bg-buttoncolor px-10px gap-3 ">
      <div className="d-flex gap-1">
        <div className="my-auto bg-idcolor w-5px">
          <p className="text-center my-auto"> {idnum}</p>
        </div>
        <button className=" m-3px">{todonam} </button>
      </div>
      <div className="d-flex ">
        <button>
          <AiFillCheckCircle className="c-checkcolor t-24px m-0px" />
        </button>
        <button>
          <AiFillCloseCircle className="c-cancelcolor t-24px m-0px" />
        </button>
      </div>
    </div>
  );
};
export default TodoButton;
