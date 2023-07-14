import { v4 as uuidV4 } from "uuid";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

enum Status {
  TODO = "To-do",
  DOING = "Doing",
  DONE = "Done",
}

interface TodoItem {
  id: string;
  name: string;
  description: string;
  status: Status;
}

const TodoListContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #f44336;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TodoItemContainer = styled.li`
  margin-block: 10px 20px;
  writing-mode: horizontal-tb;
`;

const TodoList: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<Status | any>(Status.TODO);
  const [editItemId, setEditItemId] = useState<string | null>(null);

  const handleAddTodo = () => {
    if (editItemId) {
      const editedTodoItems = todoItems.map((todo) =>
        todo.id === editItemId ? { ...todo, name, description, status } : todo
      );
      setTodoItems(editedTodoItems);
      setEditItemId(null);
    } else {
      const newTodo: TodoItem = {
        id: uuidV4(),
        name: name,
        description: description,
        status: status,
      };

      setTodoItems([...todoItems, newTodo]);
    }

    setName("");
    setDescription("");
    setStatus(Status.TODO);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodoItems);
  };

  const handleDeleteAllTodo = () => {
    setTodoItems([]);
  };
  const handleEditTodo = (id: string) => {
    const todoToEdit = todoItems.find((todo) => todo.id === id);
    if (todoToEdit) {
      setName(todoToEdit.name);
      setDescription(todoToEdit.description);
      setStatus(todoToEdit.status);
      setEditItemId(id);
    }
  };

  return (
    <div >
      <TodoListContainer id="container">
        <div >
          <Heading>To-Do List</Heading>
          <div>
            <FormLabel>
              Name:
              <FormInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormLabel>
          </div>
          <div>
            <FormLabel>
              Description:
              <FormInput
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormLabel>
          </div>
          <div>
            <FormLabel>
              Status:
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={Status.TODO}>Todo</option>
                <option value={Status.DOING}>Doing</option>
                <option value={Status.DONE}>Done</option>
              </select>
            </FormLabel>
          </div>
          <div id="btn">
            <AddButton onClick={handleAddTodo}>
              {editItemId ? "Edit" : "Add"}
            </AddButton>
            {todoItems.length > 0 && (
              <DeleteButton onClick={() => handleDeleteAllTodo()}>
                Delete All
              </DeleteButton>
            )}
          </div>
        </div>
        {/* <ul>
        {todoItems.map((todo) => (
          <TodoItemContainer key={todo.id}>
            <strong>{todo.name}</strong> - {todo.description} ({todo.status})
            <div>
            <EditButton onClick={() => handleEditTodo(todo.id)}>
              Edit
            </EditButton>
            <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </DeleteButton>
            </div>
          </TodoItemContainer>
        ))}
      </ul> */}

        <div>
          <ul>
            {todoItems.map((todo) => (
              <>
                <Card
                  id={todo.id}
                  name={todo.name}
                  description={todo.description}
                  status={todo.status}
                />
                <div id="btn">
                  <EditButton onClick={() => handleEditTodo(todo.id)}>
                    Edit
                  </EditButton>
                  <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </DeleteButton>
                </div>
              </>
            ))}
          </ul>
        </div>
      </TodoListContainer>
    </div>
  );
};

export default TodoList;
