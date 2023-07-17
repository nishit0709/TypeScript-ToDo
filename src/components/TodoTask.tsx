import React from 'react'
import {Status, Task} from "./Schema";
import "./TodoTask.css"
interface Props{
    task : Task;
    deleteTask(taskIdToDelete:string):void,
    updateTask(taskIdToUpdate:string):void,
}

const TodoTask = ({task,deleteTask,updateTask}:Props) => {

  return (
    <div className='task'>
        <div className='content'>
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.status}</span>
        </div>
        <button className='editButton' onClick={()=>{updateTask(task.id)}}>+</button>
        <button className='deleteButton' onClick={()=>{
            deleteTask(task.id)
        }}>X</button>
        {/* <button className='todoButton'>nikunj</button> */}
    </div>
  )
}

export default TodoTask