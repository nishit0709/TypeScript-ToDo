import { useEffect, useState } from "react";
import "./ToDoForm.css";
import taskType,{status} from "../../Types/Types";

export default function ToDoForm({functionToAddTask, forGenNewId=0,functionToUpdateTask,currentEditedItem,functionToSetEditItem}:any) {

  
  
  let [title, setTitle] = useState<string>(""); // state for title input
  let [descp, setDescp] = useState<string>(""); // state for description  input
  let [Status, setStatus] = useState<status.Doing|status.Done|status.Todo>(); // state for status input
  let [addOrUpdate,setAddOrUpdate]=useState<string>("Add");
     
  useEffect(()=>{
    console.log("currently edited item",currentEditedItem)

    if(currentEditedItem?.id!=undefined){
      setTitle(currentEditedItem.title);
      setDescp(currentEditedItem.description);
      setStatus(currentEditedItem.status);
      setAddOrUpdate("Update");
    }
    else{
      setAddOrUpdate("Add");
      setTitle("");
      setDescp("");
      setStatus(status.Todo);
    }

  },[currentEditedItem])
    
    
    let clearForm=()=>{
      
      setTitle("");
      setDescp("");
      setStatus(status.Todo);
      functionToSetEditItem(undefined)
      setAddOrUpdate("Add");
      
    }
    let handleOnSave=(e:any)=>{
      
      e.preventDefault();

      if(currentEditedItem?.id!=undefined){
        console.log("existing id with was updated",currentEditedItem.id)
        let newTask:taskType={
          id:currentEditedItem.id,
          title:title,
          description:descp,
          status:Status
        }
        functionToUpdateTask(newTask);

      }
      //if not item present in the CurrentlyEditItem state, 
      // then a new task should be added 
      else{
        let newId:number=forGenNewId+1;
      console.log("saved");
      let newTask:taskType={
        id:newId,
        title:title,
        description:descp,
        status:Status
      }
      functionToAddTask(newTask)
      }
      clearForm()
    }
  

  return (
    <div className="formContainer">
      <form
        onSubmit={(e) => {
            handleOnSave(e)
        }}
      >
        <label>Task Name :</label>
        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="inputForm"
          required
        />
        <label>Description :</label>
        <input
          type="text"
          placeholder="Description ..."
          className="inputForm"
          value={descp}
          onChange={(e) => {
            setDescp(e.target.value);
          }}
          required
        />
        <label>Status :</label>
        <select
          id="country"
          name="country"
          value={Status}
          onChange={(e) => {
            console.log("status value",e.target.value)
            setStatus(e.target.value as any)
          }}
          className="inputForm"
        required>
          <option value="" selected disabled>Select One</option>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing </option>
          <option value="Done">Done</option>
        </select>
        <button className="inputForm inputBtn"> {addOrUpdate} </button>
        <button
          className="inputForm inputBtn"      
          type="button"
          onClick={clearForm}>Reset
        </button>
      </form>
    </div>
  );
}
