import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import './TaskManager.css'

const TaskManager = () => {
  const [tasks,setTasks] = useState([])
  const addTask = (text)=>{
    const newTask = {id:Date.now(), text, completed:false}
    setTasks((prev)=>[...prev,newTask])
  }

  const prev = (id)=>{
    setTasks(tasks.map(task=>{return task.id ==id ? {...task,completed: !task.completed} : task }))
  }
  const deleteTask=(id)=>{
    const filterTask = tasks.filter((task)=>{
      return task['id'] !== id
    })
    setTasks(filterTask)
  }

  return (
    <div className="main">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} prev={prev} deleteTask={deleteTask} />
      <p>Tasks: {tasks.length}</p>
    </div>
  );
};

export default TaskManager;
