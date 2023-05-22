import { useState } from "react";
// import Task from "./Task";
import Text from "./Text";
import './App.css';



function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div clasNAme="App">
      <button
      onClick={() => {
        setShowText(!showText);
      }}
      >
        Show Text
      </button>{showText && <Text />}
    </div>
  )


  // const [todoList, setTodoList] = useState([]);
  // const [newTask, setNewTask] = useState("");


  
  // function handleChange(event) {
  //   setNewTask(event.target.value);
  // }

  // function addTask() {
  //   const task = {
  //     id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
  //     taskName: newTask,
  //     completed: false,
  //   }
  //   setTodoList([...todoList, task]);
    
  // }

  // function deleteTask(id) {
  //   setTodoList(todoList.filter((task) => task.id !== id))
  // };

  // function completeTask(id) {
  //   setTodoList(
  //     todoList.map((task) =>{
  //       if (task.id === id) {
  //         return {...task, completed: true };
  //       } else {
  //         return task;
  //       }
  //     })
  //   )
  // }

  // return (
  //   <div className="App">
  //     <div className="addTask">
  //       <input onChange={handleChange}/>
  //       <button onClick={addTask}> Add Task</button>
  //     </div>
  //     <div className="list">
  //     {todoList.map((task) => {
  //       return (
  //         <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask}/>
  //       );
  //     })}
  //     </div>
      
   
     
  
  //   </div>
  // );



}






export default App;
