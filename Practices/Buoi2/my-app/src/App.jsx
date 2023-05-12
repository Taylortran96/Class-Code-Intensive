import React, {useState} from 'react';
import './App.css';
import TaskList from './Components/task-list';
import TaskIcon from './Components/completed-tasks';

function App() {
  const App = () => {
    const [tasks, setTasks] = useState([
      { name: "Buy milk", completed: true },
      { name: "Walk the dog", completed: false },
      { name: "Do laundry", completed: false }
    ]);
  
    const addTask = (name) => {
      const newTasks = [...tasks, { name, completed: false }];
      setTasks(newTasks);
    };

    const completeTask = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    };
    const addTask = (name) => {
      const newTasks = [...tasks, { name, completed: false }];
      setTasks(newTasks);
    };

    const completeTask = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Todo App</h1>
      </header>
      
      <div className ="AddList">
        <input type="text" placeholder="Add To do..." />
        <button type="button">submit</button>
      </div>
      
      <TaskList 
        tasks={tasks} 
        completeTask={completeTask} 
        removeTask={removeTask} 
      />
    
    </div>
  );
}

export default App;
