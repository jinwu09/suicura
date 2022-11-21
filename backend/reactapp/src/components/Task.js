const Task = ({task, onDelete, onToggle}) => {
   
    return (
        <div className={`task ${task.reminders?'reminder':''}`}
            onDoubleClick={()=>onToggle(task.id)}
        >
            <h3>{task.text} <button onClick={()=>onDelete(task.id)} style={{color: 'red'}}>&#x2716;</button></h3>
            <p>{task.date}</p>
        </div>
    )
}



export default Task