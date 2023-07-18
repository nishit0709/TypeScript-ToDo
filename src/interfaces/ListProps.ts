import { TodoData } from "./TodoData";

export interface ListProps {
  data: TodoData;
  editTodo(): void;
  deleteTodo(): void;
}
