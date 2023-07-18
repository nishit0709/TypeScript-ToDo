import { TodoData } from "./TodoData";

export interface TodoProps {
  todoArr: TodoData[];
  editTodo(taskID: number): void;
  handleDelete(taskID: number): void;
}
