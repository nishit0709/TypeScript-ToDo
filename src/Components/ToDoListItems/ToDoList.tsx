import { useEffect, useState } from "react";
import "./ToDoList.css";
import taskType from "../../Types/Types";
export default function ToDoList({List,functionToSetEditItem,functionToDeleteItem}:any) {
 
  // On clicking the update button of a task item
  // setting state and using todoform comp to modify the task
  let handleOnUpdate=(value:taskType)=>{
    functionToSetEditItem(value)
  }

  
  //function to delete a particular task
  let handleOnDelete=(value:taskType)=>{

      console.log("item deleted",value);
      functionToDeleteItem(value)
      functionToSetEditItem({})
  }
  return (
    <div className="ListContainer">
      <ol className="ListClass">
        {List?.map((value:taskType) => (
          <div
            className="ListItem"
            key={value.id}>
            <div> Title : {value.title}</div>
            <div> Description : {value.description}</div>
            <div> Status : {value.status}</div>
            <div className="itemButtons">
              <button onClick={()=>handleOnUpdate(value)}>
                Update</button>
              <button onClick={()=>handleOnDelete(value)}>
                Delete</button></div>
          </div>
        ))}
      </ol>
    </div>
  );
}
