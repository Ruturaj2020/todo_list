import React from 'react'
import { useState } from 'react/cjs/react.development';
import TodoForm from './Todoforms';
import Todo from './Todo';

export default function () {
    const [todos,setTodos] = useState([]);
    const addTask = task => {
        if(!task.text){
            return;
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }
const removeTask = id => {
    let updatedTasks = [...todos].filter(task => task.id!=id)
    setTodos(updatedTasks)
} 

const completeTask = id => {
    let updatedTasks = todos.map(todo => {
        if(todo.id==id){
            todo.isdone=true;
        }
        return todo;
    })
    setTodos(updatedTasks)
}

    return <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>;
}
