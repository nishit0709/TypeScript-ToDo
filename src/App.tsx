import "./index.css";
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <div className="App">
      <h1 className="todoHeading">This is a ToDo List</h1>
      <div className="container">
        <TaskForm />
      </div>
    </div>
  );
}
