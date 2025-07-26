"use client"
import React from 'react'
import { FiSend } from 'react-icons/fi';

const Form = ({ name, email, message, submitMessage, setName, setEmail, setMessage, loading, handleChange}) => {
  return (
    <div className='px-10 py-4 h-auto min-w-[600px]'>
      <form onSubmit={submitMessage} className='flex flex-col gap-10 text-xl'>
        {/* Username */}
        <input
          type="text"
          name='username'
          value={name}
          onChange={handleChange(setName)}
          className='bg-transparent border-b-2 p-2 outline-none w-full focus:border-b-2'
          placeholder='Username'
          autoComplete='off'
          
        />
        <input
          type="email"
          name='email'
          value={email}
          onChange={handleChange(setEmail)}
          className='bg-transparent border-b-2 p-2 outline-none w-full focus:border-b-2'
          placeholder='Email'
          autoComplete='off'
        />
        <textarea
          name="message"
          className="bg-transparent resize-none outline-none border border-1 p-2"
          rows="10"
          cols="50"
          value={message}
          onChange={handleChange(setMessage)}
          placeholder='Message'
        />
        {/* Submit Button */}
        <button className={`flex gap-2 items-center w-[200px] border p-2 py-3 ${loading ? "cursor-not-allowed justify-center" : "cursor-pointer"}`}>
          
        {loading ? (
                        <div role="status" className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                        </div>
                    ) :(
                        <div className='flex gap-2 items-center'><FiSend/> Send Message</div>
                    ) }
        </button>
      </form>
    </div>
  )
}

export default Form;
