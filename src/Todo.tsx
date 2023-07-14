import { useState } from "react";
import "./Todo.css";
import logo from "./cross.png";

type todoData = {
  name: string;
  description: string;
  status: string;
};

const ListItem = (props: any) => {
  return (
    <div className="list-item" onClick={() => props.editTodo(props.taskID)}>
      <span id="title">{props.data.name}</span>
      <span id="status">{props.data.status}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          props.handleDelete(props.taskID);
        }}
      >
        <img src={logo} alt="cross" />
      </button>
      <p>{props.data.description}</p>
    </div>
  );
};

const Todo = () => {
  const [todo, setTodo] = useState<todoData[]>([]);
  const [id, setId] = useState<number>(0);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
 
  function handleSubmit(e: any) {
    e.preventDefault();
    const data: todoData = {
      name,
      description,
      status
    };
    if (todo.length === id) {
      // Add a todo to the list
      setTodo([...todo, data]);
      setId(id + 1)
    } else {
      // Update a todo from the list
      setTodo([...todo.slice(0, id), data, ...todo.slice(id + 1)]);
      setId(todo.length)
    }

    setName("");
    setDescription("");
    setStatus("");
  }

  // Returns ID of the element to be updated
  function editTodo(taskID: number) {
    setId(taskID);
    setName(todo[taskID].name);
    setDescription(todo[taskID].description);
    setStatus(todo[taskID].status);
  }

  // Deletes the element based on the ID
  function handleDelete(taskID: number) {
    setTodo([...todo.slice(0, taskID), ...todo.slice(taskID + 1)]);
    setId(todo.length - 1);
  }

  // Used to reset form and set 'id' to default value
  function resetData(){
    setId(todo.length);
    setName("");
    setDescription("");
    setStatus("");
  }

  return (
    <div className="container">
      <div className="create-todo">
        <h4>Create/Update a Todo</h4>
          <form onSubmit={handleSubmit}>
            <label>Todo Name</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <br />
            <br />

            <label>Todo Description</label>
            <input
              type="text"
              placeholder="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <br />
            <br />

            <label>Todo Status</label>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="Todo">To-Do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>

            <br />
            <br />
            
            <div className="btnSubmit">
                <button type="submit">
                    {todo.length === id ? "Add" : "Update"}
                </button>
                <button onClick={resetData}>Reset</button>
            </div>            
          </form>
      </div>
      <div className="view-todo">
        <h4>Your Todo(s)</h4>
        <div className="todo-list">
          {todo.map((task, index) => (
            <ListItem
              key={index}
              taskID={index}
              data={task}
              editTodo={editTodo}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
