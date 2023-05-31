import { useState, useEffect, createContext } from "react";
// import Task from "./Task";
// import Text from "./Text";
import './App.css';
// import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import  Home  from "./Pages/Home";
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Nando");

  return (
    <div className="App"> 
    <AppContext.Provider value={{ username, setUsername }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
    
    
    
    
    </div>
    
    )





  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(null);

  // function fetchData() {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictedAge(res.data.age)
  //   });
  // }
  // return (
  //   <div className="App">
  //     <input placeHolder="Ex. Nando..." onChange={(event) => {setName(event.target.value)}}/>
  //     <button onClick={fetchData}> Predict Age </button>
  //     <h1>Name:{predictedAge?.name}</h1>
  //     <h1>Predicted Age:{predictedAge?.age}</h1>
  //     <h1>Count:{predictedAge?.count}</h1>
  //   </div>
  // )






  // const [catFact, setCatFact] = useState("");

  // function fetchCatFact() {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  // });

  // }
  // useEffect(() => {
  //   fetchCatFact();
  // }, []);


  // return (
  //   < div className="App">
  //     <button onClick={fetchCatFact}> Generate Cat Fact </button>
  //     <p> {catFact} </p>
  //   </div>
  // )

  // const [showText, setShowText] = useState(false);

  // return (
  //   <div clasNAme="App">
  //     <button
  //     onClick={() => {
  //       setShowText(!showText);
  //     }}
  //     >
  //       Show Text
  //     </button>{showText && <Text />}
  //   </div>
  // )


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
