
import ToDoForm from "./Components/Form/ToDoForm";
import ToDoList from "./Components/ToDoListItems/ToDoList";
import { useEffect, useState } from "react";
import type taskType from "./Types/Types"
import "./style.css"
export default function App() {

  let [taskItemArray,setTaskItemArray]= useState<taskType[]>([])
  let [editItem, setEditItem] = useState<taskType>();
  
  // defining a global array to store the task items
  useEffect(()=>{
    console.log("TaskItems :",taskItemArray)
  },[taskItemArray])
  
  // function to Delete items to list

  let delateTaskItem=(value:taskType)=>{
    if(value?.id==undefined){console.log("value not found");}
    else{
        let existingList=[...taskItemArray];
        let indexToBeDeleted:number = -1;
        for(let i  in existingList){
          if(existingList[i].id==value.id){
            indexToBeDeleted=( i as unknown) as number;
            break;
          }
        } 
        // deleting the item from the array
        existingList.splice(indexToBeDeleted,1);
        console.log("After deleting :",existingList);
        setTaskItemArray(existingList);
        setEditItem(undefined);
    }
  }
  // function to update items to list
  let updateTaskItem=(value:taskType)=>{
    if(value?.id==undefined){console.log("value not found");}
    else{
      let existingList=[...taskItemArray];
      for(let i of existingList){
      if(i.id==value.id){
        i.title=value.title;
        i.description=value.description;
        i.status=value.status;
      }
    }
    setTaskItemArray(existingList);
  }
  }
  // function to add items to list
  let addTaskItem=(value:taskType)=>{
      let existingList:taskType[]=[...taskItemArray,value];
      setTaskItemArray(existingList)
  }
  return <div className="App">
    <div className="LeftContainer">
    <ToDoForm functionToAddTask={addTaskItem} forGenNewId={taskItemArray?.length}
    functionToUpdateTask={updateTaskItem}
    currentEditedItem={editItem}
    functionToSetEditItem={setEditItem}
    />
    </div>
    <div className="RightContainer">
    <ToDoList List={taskItemArray} functionToSetEditItem={setEditItem} functionToDeleteItem={delateTaskItem}/>
    </div>
  </div>
}
