import { useHomeContext } from "../context/useHomeContext";
import Status from "./Status";

const CenterContent = () => {
  const { todonam, setToDoNam } = useHomeContext();
  return (
    <div>
      <div className="d-flex flex-column bg-content border-radius-15px w-90p h-98p m-2 p-3">
        <Status />
        <div class="">
          <h1>{todonam}</h1>
        </div>
      </div>
    </div>
  );
};

export default CenterContent;
