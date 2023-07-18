import { TodoData } from "./TodoData";

export interface FormProps {
  currentTodo: TodoData;
  todoLength: number;
  currentIndex: number;
  resetForm(): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleInput(key: string, value: string): void;
}
