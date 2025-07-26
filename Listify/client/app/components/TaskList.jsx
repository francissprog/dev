// TaskList.jsx
"use client";
import React from 'react';
import { FaTrashCan } from "react-icons/fa6";

const TaskList = ({ tasks, setTasks, deleteTask,  }) => {
  const toggleDone = (index) => {
    setTasks(prevTasks => (
      prevTasks.map((task, i) => (
        i === index ? { ...task, done: !task.done } : task
      ))
    ));
  };

  return (
    <div className='flex flex-col gap-3'>
      {tasks.map((task, index) => (
        <div key={index} className='border border-black flex justify-between p-2 items-center pr-6'>
          <span className={`cursor-pointer ${task.done ? "line-through" : "no-underline"} text-lg`} onClick={() => toggleDone(index)}>
            {task.task}
          </span>
          <div className='flex flex-row gap-2 items-center'>
            <input 
              type="checkbox" 
              name="done" 
              checked={task.done} 
              onChange={() => toggleDone(index)}
              className='custom-checkbox' 
            />
            <button className='bg-red-500 hover:bg-red-600 p-2 text-white' onClick={() => deleteTask(index)}>
              <FaTrashCan />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
