import React, {useState} from 'react'

export const EditTaskForm = ({editToDo, task}) => {
    const [value, setValue] = useState(task?.task)
    const handleSubmit = e => {
        e.preventDefault();

        editToDo(value, task.id);

        setValue("");
    }
  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
    
    <input type="text" className="TaskInput" value={value}
     placeholder="Update task" onChange={(e)=> setValue(e.target.value)}/>
    
    <button type="submit" className="submit-btn">
      Update Task
    </button>
  </form>
  )
}
