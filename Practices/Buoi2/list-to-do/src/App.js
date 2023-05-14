import './App.css'; 
import React,{useState} from 'react';
import Addtodo from './Components/Add-to-do/Addtodo';
import { BiMinusCircle } from "react-icons/bi";


function App() {
  // Hiệu ứng Add to do
  function handleClick() {
    console.log("Button clicked!"); 
  }

  const [todos, setTodos] = useState([
    { text: "Buy groceries", completed: false },
    { text: "Go for a walk", completed: false },
    { text: "Take out the trash", completed: false }
  ]);

  const handleChange = (index, event) => {
    const newTodos = [...todos];
    newTodos[index].completed = event.target.checked;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>Simple To Do App</h1>
      </div>

    <Addtodo 
        inputType="text" 
        buttonType="button" 
        placeholder ="Add your new todo here..." 
        onclick={handleClick}
      >
      Submit
    </Addtodo>

    <ul className='todo-list'>
      {todos.map ((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todos.completed}
            onChange={(event) => handleChange(index, event)}
          />
          <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
              {todo.text}
          </span>
          <span className="submit-btn">
            <BiMinusCircle />
          </span>
        </li>
      ))}
    </ul>

    </div>
  );
}

export default App;
