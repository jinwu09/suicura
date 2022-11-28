import Navbarcomponent from "./components/navbar/Navbarcomponent";
import Todolist from "./components/todolist/todolist";
import Pomodoro from "./components/pomodoro/pomodoro";
import CenterContent from "./components/CenterContent/CenterContent";
import "bootstrap";
import "./css/App.scss";

function App() {
  return (
    <div className="App">
      <Navbarcomponent />
      <div className="d-flex flex-row h-max bg-test">
        <Todolist />
        <CenterContent />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
