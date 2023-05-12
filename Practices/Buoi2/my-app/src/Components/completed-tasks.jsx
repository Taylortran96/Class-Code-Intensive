import React from 'react';
import { BiCheckbox , BiCheckSquare } from "react-icons/bi";

function TaskIcon (props) {
    let {tasks} = props;
    return (
      <div
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
        <span onClick={() => completeTask(index)}>
            {task.completed ? 
                <BiCheckbox color="#0F9D58" /> :
                <BiCheckbox color="#E0E0E0" />
            }
        </span>
        <span>{task.name}</span>
        <button onClick={() => removeTask(index)}>
            <BiCheckSquare color="#F44336" />
        </button>
      </div>
    );
};

export default TaskIcon;
