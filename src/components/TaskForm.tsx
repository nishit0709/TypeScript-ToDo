import { useState,useRef } from "react";
import TaskList from "./TaskList";
import {Status, Task} from "./taskInterface";

export default function TaskForm() {

  let id_count = useRef<number>(0);
  let taskInit = {
    id:id_count.current,
    title:"",
    task:"",
    status:Status.TODO
  }
  
  const [currentTask, setCurrentTask] = useState<Task>(taskInit);
  const [currentID, setCurrentID] = useState<Number>();  
  const [taskList, setTaskList] = useState<Task[]>([]);
  
  const resetFields = () => {
    setCurrentTask(taskInit)
    setCurrentID(-1);
  }

  const appendTask = () => {
    currentTask.id = id_count.current++;
    setTaskList([...taskList, currentTask]);
    resetFields();
  }

  const updateTask = () => {
    taskList.forEach(function (listItem) {
      if (listItem.id === currentID) {
        listItem.title = currentTask.title;
        listItem.status = currentTask.status;
        listItem.task = currentTask.task;
      }
    });
  }

  const handleMutation = () => {
    if (taskList.length === 0) {
      appendTask();
    } else if (currentID!==-1){
      updateTask();
    } else {
       appendTask();
      }
    resetFields();
  };

  const handleDelete = () => {
    setTaskList((current) =>
      current.filter((t) => t.id !== currentID)
    );
    resetFields();
  }

  return (
    <>
      <div className="taskForm">
        <input
          placeholder="Title"
          value={currentTask.title}
          onChange={(e) => setCurrentTask(prevTask => {return { ...prevTask, title: e.target.value }})}
        />
        
        <input
          placeholder="Description"
          value={currentTask.task}
          onChange={(e) => setCurrentTask(prevTask => {return { ...prevTask,task: e.target.value }})}
        />
        <select value={currentTask.status} onChange={(e) => setCurrentTask( prevTask => {return {...prevTask,status:e.target.value}})}>
          <option>{Status.TODO}</option>
          <option>{Status.DOING}</option>
          <option>{Status.DONE}</option>
        </select>
        <br />
        <button onClick={handleMutation} className="addButton">Add/Update</button>
        <button onClick={handleDelete} className="deleteButton">Delete</button>
      </div>
      <TaskList tasks={taskList} grabTask={setCurrentTask} grabID={setCurrentID}/>
    </>
  );
}
