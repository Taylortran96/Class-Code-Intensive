import React from "react";
import { useState } from "react";


export default function TaskList (){
    const [tasks, setTasks] = useState ([
        {id: 1, taskName: "Doing homework 📖", isComplete: true}, 
        {id: 2, taskName: "Cleaning my room😨", isComplete: false}, 
        {id: 3, taskName: "Baby-sitting 😪", isComplete: true}, 
        {id: 4, taskName: "Hangout with friends 👯‍♀️ ", isComplete: false} 
    ])

    // Part 1: Add to do
    const [newTaskName, setNewTaskName] = useState([]);
    
    const handleNewTask = (event) => {
        setNewTaskName(event.target.value);
    }

    // Button Add new task
    const handleAddTask = () => {
        const newTask = {
            id: tasks.length + 1,
            taskName: newTaskName,
            isComplete: false
        };
        // thêm newTask vào cuối mảng tasks = hàm push
        setTasks((prevTask) => [...prevTask, newTask]);
        setNewTaskName("")
    };
    
    //Part 2
    const handleTaskStatus = (index, event) => {
        const taskcheck = [...tasks];
        taskcheck[index].isComplete = event.target.checked;
        setTasks(taskcheck);
    };
      
    const deleteTask = (deletItem) => {
        setTasks ((prev) => prev.filter((task) => task.id !== deletItem));
    };
    

    return (

        <div className="task-component">  
            <div className="add-task-todo">
                <input 
                className="add-box"
                type="text"
                placeholder="Add Todo"
                value={newTaskName}
                onChange={handleNewTask}
                />
                <input className="submit-btn" type="submit" onClick={handleAddTask}/>
            </div>
            
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.isComplete}
                            onChange={(event) => handleTaskStatus(index, event)}
                        /> {""}
                        <span style={{textDecoration: task.isComplete ? "line-through" : "none"}}>{task.taskName}</span>
                        <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>


        </div>
        
    )
}