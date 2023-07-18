import { FormProps } from "../interfaces/FormProps";

function TodoForm(props: FormProps) {
  return (
    <div className="create-todo">
      <h4>Create/Update a Todo</h4>
      <form onSubmit={props.handleSubmit}>
        <label>Todo Name</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={props.currentTodo.name}
          onChange={(e) => props.handleInput("name", e.target.value)}
          required
        />

        <br />
        <br />

        <label>Todo Description</label>
        <input
          type="text"
          placeholder="description"
          name="description"
          value={props.currentTodo.description}
          onChange={(e) => props.handleInput("description", e.target.value)}
          required
        />

        <br />
        <br />

        <label>Todo Status</label>
        <select
          name="status"
          value={props.currentTodo.status}
          onChange={(e) => props.handleInput("status", e.target.value)}
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
            {props.todoLength === props.currentIndex ? "Add" : "Update"}
          </button>
          <button onClick={props.resetForm}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
