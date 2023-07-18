import { ListProps } from "../interfaces/ListProps";
import logo from "../icons/cross.png";

const ListItem = (listProps: ListProps) => {
    return (
      <div className="list-item" onClick={listProps.editTodo}>
        <span id="title">{listProps.data.name}</span>
        <span id="status">{listProps.data.status}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            listProps.deleteTodo();
          }}
        >
          <img src={logo} alt="cross" />
        </button>
        <p>{listProps.data.description}</p>
      </div>
    );
  };
  

export default ListItem