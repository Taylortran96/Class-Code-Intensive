import React from 'react';
import TaskIcon from './completed-tasks';

const TaskList = (props) => {
  const { tasks, completeTask, removeTask } = props;

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

