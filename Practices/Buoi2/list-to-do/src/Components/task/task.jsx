import React,{useState} from 'react';
function TaskList (props){
    const [todo] = props;
    <li key={index}>
        <input
            type="checkbox"
            checked={completed}
            onChange={(event) => handleChange(index, event)}
        />

        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {text}
        </span>
    </li>
}
export default TaskList;