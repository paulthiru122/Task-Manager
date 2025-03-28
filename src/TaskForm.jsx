import React, { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [value,setValue] =useState('')
    const handler=(e)=>{
        e.preventDefault()
        if(value.trim()){
            addTask(value)
            setValue('')
        }
    }
    const handlechange= (e)=>{
        setValue(e.target.value)
    }

  return (
    <div>
        <form action="" onSubmit={handler}>
            <div className="add-task-action">
                <input type="text"   value={value} onChange={handlechange} placeholder='Add a Task' className='add-task-input' />
                <button type='submit'  className='add-task-btn'> Add</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm