import { useState } from "react";
import './App.css';



function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  
  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTodoList([...todoList, newTask]);
    
  }

  function deleteTask(taskName) {
    
    setTodoList()
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list"></div>
      {todoList.map((task) => {
        return (
          <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}> X </button>
          </div>
        );
      })}
      
   
     
  
    </div>
  );
}






export default App;