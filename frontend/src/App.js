import Navbarcomponent from "./components/navbar/Navbarcomponent";
import Todolist from "./components/todolist/todolist";
import Pomodoro from "./components/pomodoro/pomodoro";
import CenterContent from "./components/CenterContent/CenterContent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbarcomponent />
      <div className="d-flex flex-row h-max ">
        <Todolist />
        <CenterContent />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
