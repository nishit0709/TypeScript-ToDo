import React from 'react'
import { useState } from 'react'
import './Todo.css'
import logo from './cross.png'
import { format } from 'path'

type todoData = {
    name?: string,
    description?: string,
    status?: string
}

const ListItem = (props:any) => {
    console.log(props)
    return(
        <div className='list-item' onClick={() => props.handleUpdate(props.taskID)}>
            <span id='title'>{props.data.name}</span>
            <span id='status'>{props.data.status}</span>
            <button onClick={(e) => {
                    e.stopPropagation()
                    props.handleDelete(props.taskID)
                }}><img src={logo} alt='cross' /></button>
            <p>{props.data.description}</p>
        </div>
    )
}

const Todo = () => {
    const [todo, setTodo] = useState<todoData[]>([])
    const [id, setId] = useState<number>(0)

    const [name, setName] = useState<string | undefined>('')
    const [description, setDescription] = useState<string | undefined>('')
    const [status, setStatus] = useState<string | undefined>('')

    function handleSubmit(e: any){
        e.preventDefault()
        const data:todoData = {
            name,
            description,
            status
        }
        if(todo.length === id ){
            setTodo([...todo, data])
        } else {
            setTodo([...todo.slice(0, id), data, ...todo.slice(id+1)])
        }

        setId(todo.length)
        setName('')
        setDescription('')
        setStatus('')
    }

    function handleUpdate(taskID: number){
        setId(taskID)
        setName(todo[taskID].name)
        setDescription(todo[taskID].description)
        setStatus(todo[taskID].status)
    }

    function handleDelete(taskID: number){
        setTodo([...todo.slice(0, taskID), ...todo.slice(taskID+1)])
        setId(todo.length)
    }

    return (
        <div className='container'>
            <div className='create-todo'>
                <h4>Create/Update a Todo</h4>
                <div>
                    <form onSubmit={handleSubmit}>

                        <label>Todo Name</label>
                        <input type='text' placeholder='name' name='name' value={name} onChange={(e) => setName(e.target.value) } required/>

                        <br/><br/>  

                        <label>Todo Description</label>
                        <input type='text' placeholder='description' name='description' value={description} onChange={(e) => setDescription(e.target.value) } required/>

                        <br/><br/>

                        <label>Todo Status</label>
                        <select name='status' value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="">--Please choose an option--</option>
                            <option value="Todo">To-Do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>

                        <br/><br/>

                        <button type='submit' id='submit'>Add/Update</button>
                    </form>
                </div>
            </div>
            <div className='view-todo'>
                <h4>Your Todo(s)</h4>
                <div className='todo-list'>
                    {todo.map((task, index) => (
                       <ListItem key={index} taskID={index} data={task} handleUpdate={handleUpdate} handleDelete={handleDelete} /> 
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Todo