import { useHomeContext } from "../context/useHomeContext";
import Status from "./Status";

const CenterContent = () => {
  const { toDoFocus, setToDoFocus } = useHomeContext();
  return (
    <div>
      <div className="d-flex flex-column bg-content border-radius-15px w-90p h-98p m-2 p-3">
        <Status />
        <h1>{toDoFocus}</h1>

        <button onClick={() => setToDoFocus("test")}>make it into test</button>
      </div>
    </div>
  );
};

export default CenterContent;
