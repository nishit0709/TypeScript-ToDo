import { useState } from "react";
import TaskList from "./TaskList";

let id_count: number = 0;

enum Status {
  TODO = "To-do",
  DOING = "Doing",
  DONE = "Done"
}

interface Task {
  id: number;
  title: string;
  task: string;
  status: Status;
}

export default function TaskForm() {
  const [currentID, setCurrentID] = useState();  
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [progress, setProgress] = useState<Status|any>(Status.TODO);
  const [taskList, setTaskList] = useState<Task[]>([]);
  let f = false;
  const handleClick = () => {
    setTitle("");
    setTask("");
    f = false;
    if (taskList.length === 0) {
      setTaskList([
        ...taskList,
        { id: ++id_count, title: title, task: task, status: progress }
      ]);
    } else {
      taskList.forEach(function (arrayItem) {
        if (arrayItem.id === currentID) {
          f = true;
          arrayItem.title = title;
          arrayItem.status = progress;
          arrayItem.task = task;
        }
      });
      if (!f) {
        setTaskList([
          ...taskList,
          { id: ++id_count, title: title, task: task, status: progress }
        ]);
      }
    }
  };

  const handleDelete = () => {
    console.log(currentID);
    setTitle("");
    setTask("");
    setTaskList((current) =>
      current.filter((t) => t.id !== currentID)
    );
  }
  return (
    <>
      <div className="taskForm">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          placeholder="Description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        
        <select value={progress} onChange={(e) => setProgress(e.target.value)}>
          <option>{Status.TODO}</option>
          <option>{Status.DOING}</option>
          <option>{Status.DONE}</option>
        </select>
        <br />
        <button onClick={handleClick} className="addButton">Add/Update</button>
        <button onClick={handleDelete} className="deleteButton">Delete</button>
      </div>
      <TaskList tasks={taskList} grabTitle={setTitle} grabTask={setTask} grabID={setCurrentID}/>
    </>
  );
}
