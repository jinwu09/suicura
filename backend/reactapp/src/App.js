import './App.css';
import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {

const [isAddTaskShow, setIsAddTaskShot] = useState(false)

const [tasks, setTasks] = useState([
  {
      id: 1,
      text: 'Meeting at school',
      date: 'November 17 at 1:30pm',
      reminders: true
  },
  {
      id: 2,
      text: 'Meeting at lunch',
      date: 'November 10 at 11:30am',
      reminders: true
  },
  {
      id: 3,
      text: 'Meeting at evening',
      date: 'November 17 at 6:30pm',
      reminders: false
  },
])

const addTask = (task) => {
 const id = Math.floor(Math.random() * 10000 + 1)
 task.id = id
 
 setTasks([...tasks, task])
}

const deleteTask = (id) =>{
 setTasks(tasks.filter((task)=>task.id !== id))
}

const ToggelReminder = (id)=>{
  setTasks(tasks.map((task)=>
    task.id === id ? {...task, reminders: !task.reminders} : task
  ))
}

  return (
    <div className="container">
      <HeaderComponent 
      onAdd={()=>setIsAddTaskShot(!isAddTaskShow)}
      isAddTaskOpen={isAddTaskShow}
      />
      {isAddTaskShow && <AddTask onAdd={addTask}/>}
      
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={ToggelReminder}/>
    </div>
  );
}

export default App;
