import React from "react";
import Task from "./Task";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
