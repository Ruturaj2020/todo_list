import React from 'react'
import {FiDelete} from 'react-icons/fi';
import {FiCheckCircle} from 'react-icons/fi';
export default function Todo({todos,completeTask,removeTask}) {
    
    return todos.map((todo,index) => (
        <div className={todo.isdone ? 'complete task-div':'task-div'} key={index}>
            <div className="todo-text">{todo.text}</div>
            <div className='icons' key = {todo.id}>
            <FiCheckCircle  className='add' onClick={() => {completeTask(todo.id)}}></FiCheckCircle>
            <FiDelete  className='remove' onClick={() => {removeTask(todo.id)}}></FiDelete>
            </div>
        </div>
    ));
}
