import React, { useState } from "react";
import TaskForm from "./TaskForm";

const TaskManager = () => {
  const [tasks,setTasks] = useState([])
  const addTask = (text)=>{
    const newTask = {id:Date.now(), text, completed:false}
    setTasks((prev)=>[...prev,newTask])
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask}/>
      <p>Tasks: {tasks.length}</p>
    </div>
  );
};

export default TaskManager;
