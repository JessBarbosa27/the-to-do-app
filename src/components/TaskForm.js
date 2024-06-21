import React, {useState} from 'react'

export const TaskForm = ({addToDo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        addToDo(value);

        setValue("");
    }
  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
    
    <input type="text" className="TaskInput" value={value}
     placeholder="What is the task?" onChange={(e)=> setValue(e.target.value)}/>
    
    <button type="submit" className="submit-btn">
      Add Task
    </button>
  </form>
  )
}
