import TodoButton from './todobutton'
import { Baseurl } from '../../API/Config'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import "./../../styles/todo.css";

const Todolist = () => {
  const [todolist, settodolist] = useState([
    { todo_id: 1, todo_name: 'default' },
    { todo_id: 1, todo_name: 'default' },
  ])
  const [inputtodo, setInputtodo] = useState('')
  const [value, setValue] = useState('')
  const getlist = (status) => {
    const m = JSON.parse(localStorage.getItem('m'))
    const user_id = m.user_id
    const user_token = m.token
    console.log(user_token)
    if (status === 0) {
      axios
        .post(Baseurl + 'user/todolist/ongoing', { user_id, user_token })
        .then((res) => {
          console.log(res)
          const datas = res.data.payload
          console.log(datas)

          settodolist([...datas])
        })
    } else if (status === 1) {
      axios
        .post(Baseurl + 'user/todolist/archive', { user_id, user_token })
        .then((res) => {
          console.log(res)
          const data = res.data.payload
          console.log(data)

          settodolist([...data])
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  const ondelete = (id) => {
    const m = JSON.parse(localStorage.getItem('m'))
    const user_id = m.user_id
    const user_token = m.token
    axios
      .post(Baseurl + 'user/todolist/delete', {
        user_id,
        user_token,
        todo_id: id,
      })
      .then((res) => {
        // console.log(res);
        settodolist(todolist.filter((todo) => todo.todo_id !== id))
      })
  }
  const onarchive = (id) => {
    const m = JSON.parse(localStorage.getItem('m'))
    const user_id = m.user_id
    const user_token = m.token
    axios
      .post(Baseurl + 'user/todolist/setarchive', {
        user_id,
        user_token,
        todo_id: id,
      })
      .then((res) => {
        // console.log(res);
        settodolist(todolist.filter((todo) => todo.todo_id !== id))
      })
  }
  const addtodo = (todo_name, todo_description, todo_status) => {
    const m = JSON.parse(localStorage.getItem('m'))
    const user_id = m.user_id
    const user_token = m.token

    axios
      .post(Baseurl + 'user/todolist/create', {
        user_id,
        user_token,
        todo_name,
        todo_description,
        todo_status,
      })
      .then((res) => {
        console.log(res)
        getlist(0)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    console.log('tests')
    getlist(0)
  }, [value])

  return (
    <div className='h-maxp bg-todolist col '>
      <div className='d-flex flex-row '>
        <div className='d-flex flex-column  w-maxp '>
          <div className='todo-list-header bg-Accent d-flex text-center px-5px justify-content-center'>
            <h4>To-do List</h4>
          </div>

          <div className='todo-input d-flex flex-row '>
            <input
              type='text'
              placeholder='Add todo'
              onChange={(e) => {
                setInputtodo(e.target.value)
              }}
            />
            <button
              className='bg-accentcontent m-2 p-2'
              onClick={() => addtodo(inputtodo, '', 0)}
            >
              Add
            </button>
          </div>
          <div className='status-button'>
            <button
              className='bg-accentcontent  p-2'
              onClick={() => getlist(0)}
            >
              Ongoing
            </button>
            <button
              className='bg-accentcontent  p-2'
              onClick={() => getlist(1)}
            >
              Archived
            </button>
          </div>
          <div className='p-5px  d-flex flex-column gap-2 '>
            {todolist.map((obj, index) => {
              return (
                <TodoButton
                  key={index}
                  idnum={index + 1}
                  todo_id={obj.todo_id}
                  todonam={obj.todo_name}
                  onClickDelete={ondelete}
                  onClickArchive={onarchive}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Todolist
