// AddList.jsx
import React from 'react';


const AddList = ({ loading,handleTask,  title,handleChange, name}) => { 
  return (
    <div className='flex flex-col gap-10'>
      <div className='text-center'>
        <span className='text-4xl'>To Do List</span>
      </div>
      <form onSubmit={handleTask} className='flex justify-end gap-5'>
        <input
          name="title"
          type="text"
          placeholder='Enter your Task here'
          autoComplete='off'
          className='w-full outline-none border border-black p-2'
          value={title}
          onChange={handleChange}
        />
        <button className={`border border-black px-6 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={loading}>
          {loading ? (
            <div role="status" className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          ) : "Enter"}
        </button>
      </form>
    </div>
  );
};

export default AddList;
