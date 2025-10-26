import { useState } from "react";
import React from 'react'

const AddTaskForm = ({onAddTask}) => {
    const [taskText, setTaskText] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if (taskText.trim() === '') return;
        onAddTask(taskText);
        setTaskText('')
    }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Add a new task..."
         value={taskText}
         onChange={(e) => setTaskText(e.target.value)}
         />
         <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm