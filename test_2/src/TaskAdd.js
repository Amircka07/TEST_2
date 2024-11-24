import React, { useState } from "react";
import TaskList from "./TaskList";
import classes from "./TaskAdd.module.scss";

function TaskAdd() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1 className={classes.title}>TO DO</h1>
      <div className={classes.container}>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={`${classes.btn} ${
            tasks.length > 0 ? classes.with_clear_all : ""
          }`}
          onClick={addTask}
        >
          Add Task
        </button>
        {tasks.length > 0 && (
          <button className={classes.Clear_all} onClick={clearAllTasks}>
            Clear All
          </button>
        )}
      </div>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default TaskAdd;
