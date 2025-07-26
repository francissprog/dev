// DashboardPage.jsx
"use client"
import React, { useEffect, useState } from 'react';
import AddList from '../components/AddList';
import TaskList from '../components/TaskList';
import Cookies from 'js-cookie';
import { fetchTask } from '../utils/fetchTask';
import handleChange from '../utils/handleChange';
import { handleAddTask, handleDeleteTask } from '../services/todoService';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const [addTodo, setAddTodo] = useState({
    title: "",
    id:Cookies.get("id"),
  });

  const refreshTasks = () => {
    if (userId) return fetchTask(userId, setTasks);
  };

  useEffect(() => {
    const id = Cookies.get("id");
    setUserId(id);
    if (id) fetchTask(id, setTasks);
  }, []);

  const handleTask = async (e) => {

    // prevent from loading  
    e.preventDefault();
    setLoading(true);

    // handle the task
    await handleAddTask(addTodo, setLoading, refreshTasks);
    // clear the input
    setAddTodo({ title: "" , id:userId});
  };

  const deleteTask = async (taskIndex) => {
    await handleDeleteTask(taskIndex, userId, refreshTasks, setLoading);


  };


  return (
    <main className='grid place-content-center min-h-[70vh]'>
      <div className='border border-black w-[600px] h-auto p-7 flex flex-col gap-5'>
        <AddList loading={loading} handleTask={handleTask} title={addTodo.title} handleChange={handleChange(setAddTodo)} />
        <TaskList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
      </div>
    </main>
  );
};

export default DashboardPage;
