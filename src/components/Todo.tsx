import ListItem from "./ListItem";
import { TodoProps } from "../interfaces/TodoProps";

const Todo = (todoProps: TodoProps) => {
  return (
    <div className="view-todo">
      <h4>Your Todo(s)</h4>
      <div className="todo-list">
        {todoProps.todoArr.map((task, index) => (
          <ListItem
            key={index}
            data={task}
            editTodo={() => todoProps.editTodo(index)}
            deleteTodo={() => todoProps.handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
