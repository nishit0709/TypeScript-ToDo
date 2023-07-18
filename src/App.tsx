import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { FormProps } from "./interfaces/FormProps";
import { TodoProps } from "./interfaces/TodoProps";
import { TodoData } from "./interfaces/TodoData";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentTodo, setCurrentTodo] = useState<TodoData>({
    name: "",
    description: "",
    status: "",
  });
  const [todoArr, setTodoArr] = useState<TodoData[]>([]);

  // Returns ID of the element to be updated
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: TodoData = {
      name: currentTodo.name,
      description: currentTodo.description,
      status: currentTodo.status,
    };

    if (todoArr.length === currentIndex) {
      // Add a todo to the list
      setTodoArr([...todoArr, data]);
      setCurrentIndex(currentIndex + 1);
    } else {
      // Update a todo from the list
      todoArr[currentIndex] = data;
      setTodoArr([...todoArr]);
      setCurrentIndex(todoArr.length);
    }
    setCurrentTodo({
      name: "",
      description: "",
      status: "",
    });
  };

  // event handler when the a todo is clicked
  const editTodo = (taskID: number) => {
    setCurrentIndex(taskID);
    setCurrentTodo({
      name: todoArr[taskID].name,
      description: todoArr[taskID].description,
      status: todoArr[taskID].status,
    });
  };

  // Deletes the element based on the ID
  const handleDelete = (taskID: number) => {
    setTodoArr(todoArr.filter((_, index) => index !== taskID));
    setCurrentIndex(todoArr.length - 1);
  };

  // Handles form input for child components
  const handleInput = (key: string, value: string) => {
    currentTodo[key] = value;
    setCurrentTodo({ ...currentTodo });
  };

  // Resets form entries
  const resetForm = () => {
    setCurrentIndex(todoArr.length);
    setCurrentTodo({
      name: "",
      description: "",
      status: "",
    });
  };

  const formProps: FormProps = {
    currentTodo,
    todoLength: todoArr.length,
    currentIndex,
    resetForm,
    handleSubmit,
    handleInput,
  };

  const todoProps: TodoProps = {
    todoArr,
    editTodo,
    handleDelete,
  };

  return (
    <div className="container">
      <TodoForm {...formProps} />
      <Todo {...todoProps} />
    </div>
  );
}

export default App;
