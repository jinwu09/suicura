import Navbarcomponent from "../components/navbar/Navbarcomponent";
import Todolist from "../components/todolist/todolist";
import Pomodoro from "../components/pomodoro/pomodoro";
import CenterContent from "../components/CenterContent/CenterContent";
import { useBeforeunload } from "react-beforeunload";
import { useHomeContext } from "../components/context/useHomeContext";
import { useEffect } from "react";
// import Login from "./pages/login";
// import '../styles/App.css'

function App() {
  const { onloging, value, onsessionin, onsessionout } = useHomeContext();
  useBeforeunload(() => {
    onloging(1);
    onsessionout();
  });
  useEffect(() => {
    onloging(0);
    onsessionin();
  }, [value]);
  return (
    <div className="App d-flex flex-column h-maxvh ">
      <Navbarcomponent />
      <div className="grid grid-todo_auto_pomo grid-todo_auto_pomo-mb flex-grow-1 flex-shrink-1 flex-basis-auto">
        <Todolist />
        <CenterContent />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
