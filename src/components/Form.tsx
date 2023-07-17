import React, { useState } from "react";
import { Status, Task } from "./Schema";
import uuid from "react-uuid";
import "./Form.css";
import TodoTask from "./TodoTask";
const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.TODO);
  const [toggleSubmit, setToggleSubmit] = useState<string>("Add");
  const [isEditedItem, setIsEditedItem] = useState<string>("");
  //const [productData, setProductData] = useState([]);

  const [todo, setTodo] = useState<Task[]>([]);
  const handleChangeTitle = (event: any) => {
    setTitle(event.target.value);
    // console.log(title);
  };
  const handleChangeDesc = (event: any) => {
    setDescription(event.target.value);
    //console.log(description);
  };
  const handleChangeStatus = (event: any) => {
    setStatus(event.target.value);
    //console.log(status);
  };
  const addTask = (e: any) => {
    e.preventDefault();
    if (toggleSubmit === "Update") {
      setTodo(
        todo.map((elem) => {
          if (elem.id === isEditedItem) {
            return {
              ...elem,
              title: title,
              description: description,
              status: status,
            };
          }
          return elem;
        })
      );
      setToggleSubmit("Add");
      setTitle("");
      setDescription("");
      setStatus(Status.TODO);
      setIsEditedItem("");
    } else {
      const newTask: Task = {
        id: new Date().getTime().toString(),
        title: title,
        description: description,
        status: status,
      };
      setTodo([...todo, newTask]);
      setToggleSubmit("Add");
      setTitle("");
      setDescription("");
      setStatus(Status.TODO);
      setIsEditedItem("");
    }

    console.log(todo);
  };
  const deleteTask = (taskIdToDelete: string) => {
    setTodo(
      todo.filter((task) => {
        return task.id !== taskIdToDelete;
      })
    );
  };
  const updateTask = (taskIdToUpdate: string) => {
    let newEditItem: Task | undefined = todo.find((elem) => {
      return elem.id === taskIdToUpdate;
    });
    if (newEditItem === undefined) return;
    setTitle(newEditItem.title);
    setDescription(newEditItem.description);
    setStatus(newEditItem.status);
    setToggleSubmit("Update");
    setIsEditedItem(taskIdToUpdate);
    console.log(newEditItem);
  };

  return (
    <div className="main-body">
      <form action="">
        <div className="container">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            className="inputField"
            type="text"
            autoComplete="off"
            value={title}
            onChange={handleChangeTitle}
          ></input>
        </div>
        <div className="container">
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea
            className="inputField-description"
            autoComplete="off"
            value={description}
            onChange={handleChangeDesc}
          ></textarea>
        </div>
        <div className="container-status">
          <label htmlFor="status">Status</label>
          <select value={status} onChange={handleChangeStatus}>
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button type="submit" className="submit-button" onClick={addTask}>
          {toggleSubmit}
        </button>
      </form>
      <div className="todoList">
        <div className="heading">Todo List</div>

        {todo.map((task: Task, index: number) => (
          <TodoTask
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
