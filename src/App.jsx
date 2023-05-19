import { useState } from "react";
import Task from "./Task";
import './App.css';



function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  
  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      completed: true,
    }
    setTodoList([...todoList, task]);
    
  }

  function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id))
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
      {todoList.map((task) => {
        return (
          <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
        );
      })}
      </div>
      
   
     
  
    </div>
  );
}






export default App;
