import React from 'react'

const TaskList = ({tasks,prev,deleteTask}) => {
  return (
    <div>
        <ul className='task-list'>
           { tasks.map((task)=> <li  key={task.id}>

             <span   onClick={()=>prev(task['id'])} className={task['completed']==true && 'completed'}> {task['text']}</span>
            <span className='delete' onClick={()=>deleteTask(task.id)}>X</span></li>) }
        </ul>
    </div>
  )
}

export default TaskList