import React, { useState } from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './TodoForm';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id : null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value : ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

  return todos.map((todo, index) => (
    <div
        className= {todo.isComplete ? 'todo-row-complete line-through opacity-40 mb-8' : 'todo-row flex justify-between items-center my-2 mx-auto text-white p-3 rounded-md w-11/12 bg-gradient-to-r from-cyan-500 to-blue-500 ' } key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='flex items-center text-2xl cursor-pointer'>
            <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className='mr-1 text-white'
            />
            <TiEdit 
                onClick={() => setEdit({id : todo.id, value: todo.text})}
                className='text-white'
            />
        </div>
    </div>
  )); 
}

export default Todo
