import Navbarcomponent from '../components/navbar/Navbarcomponent'
import Todolist from '../components/todolist/todolist'
import Pomodoro from '../components/pomodoro/pomodoro'
import CenterContent from '../components/CenterContent/CenterContent'
// import Login from "./pages/login";
import '../styles/App.css'
import { useState } from 'react'

function App() {
  const [todoList, settodoList] = useState({
    idname: 1,
    todoname: 'sample',
  })
  return (
    <div className='App'>
      {/* <Login /> */}
      <Navbarcomponent />
      <div className='grid grid-todo_auto_pomo grid-todo_auto_pomo-mb h-max '>
        <Todolist todolist={todoList} />
        <CenterContent />
        <Pomodoro />
      </div>
    </div>
  )
}

export default App
