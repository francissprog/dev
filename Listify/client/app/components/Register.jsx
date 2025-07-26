"use client"
import React, { useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import handleChange from '../utils/handleChange';
import { useRouter } from 'next/navigation';
import { handleRegister } from '../services/authService';

const Register = () => {
    
    const router = useRouter();
    // states
    const [form, setForm] = useState({
      username: "",
      email: "",
      password: "",
    })
    
    // ui states
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // function to handle the submit
    const onRegister = async(e) => {

      // prevent from loading the browser
      e.preventDefault();
      setLoading(true);
    
      await handleRegister(form, router, setLoading)
    }
  return (
    <form className='flex flex-col gap-10' onSubmit={onRegister}>
    <h1 className='text-center text-4xl'>Register</h1>
    <div className='flex flex-col gap-5'>
        {/* username */}
      <div className='relative flex items-center'>
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaRegUserCircle className='text-gray-700 text-xl'/>
            </span>
            <input 
             type="text"
             placeholder='Username'
             name='username' 
             className='pl-10 pr-4 border border-black rounded-lg w-full py-3 outline-none text-lg'
             value={form.username}
             onChange={handleChange(setForm)}
             autoComplete='off'
            />
      </div>  {/* email */}
      <div className='relative flex items-center'>
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdOutlineMailOutline className='text-gray-700 text-xl'/>
            </span>
            <input 
             type="email"
             placeholder='Email'
             name='email' 
             className='pl-10 pr-4 border border-black rounded-lg w-full py-3 outline-none text-lg'
             value={form.email}
             onChange={handleChange(setForm)}
             autoComplete='off'
            />
      </div>
      <div className='relative flex items-center'>
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserLock className='text-gray-700 text-xl'/>
            </span>
            <input 
             type={showPassword ? "text" : "password"}
             name='password' 
             placeholder='Password' 
             className='pl-10 pr-4 border border-black rounded-lg w-full py-3 outline-none text-lg'
             value={form.password}
             onChange={handleChange(setForm)}
             />
      </div>
      <div className='flex flex-row gap-2'>
        <span>Show Password? </span>
        <input type="checkbox" onClick={() => setShowPassword(!showPassword)}/>
      </div>
     
    </div>
{/* submission */}
<div className='flex flex-col gap-5'>
  <button className={` bg-gray-500 transition-all p-2 text-lg text-white ${loading ? "cursor-not-allowed" : "cursor-pointer"}`} >
         {loading ? (<div
          role="status"
          className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          </div>) : "Register"}
</button>
  <span>Already have an Account? <a href='/auth/' className='underline'>Login Here</a></span>
</div>
</form>
  )
}

export default Register