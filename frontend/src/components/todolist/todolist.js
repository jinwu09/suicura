import TodoButton from './todobutton'
// import "./../../styles/todo.css";

const Todolist = ({ todolist }) => {
  return (
    <div className='list'>
      <div className='height bg-todolist col '>
        <div className='d-flex flex-row '>
          <div className='d-flex flex-column  w-maxp '>
            <div className='bg-Accent d-flex text-center px-5px justify-content-center'>
              <h4>To-do List</h4>
            </div>
            <div className='p-5px  d-flex flex-column gap-2 '>
              <TodoButton idnum={todolist.idname} todonam={todolist.todoname} />
            </div>
          </div>
        </div>
      </div>
      <div className='team'>
        <div className='team-header'>
          <h4>Team</h4>
        </div>
        <div className='team-name'>
          <span>Err Code</span>
          <div className='online'>
            <span>Online</span>
            <span>4</span>
          </div>
        </div>
        <div className='team-members'>
          <div className='member'>
            <span>Albert Santos</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Todolist
