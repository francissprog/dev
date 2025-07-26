"use client"
import React, { useEffect, useState } from 'react'
import { FaRegPenToSquare } from "react-icons/fa6";
import { logout } from '../utils/logout';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const DashboardNav = () => {
    // router init
    const router = useRouter();
    // username
    const [username, setUsername] = useState("");

    // trigger the cookies to render the username of user
    useEffect(() => {
      return setUsername(Cookies.get("username"))
    },[])
  return (
    <nav className='h-36 flex justify-between items-center mx-auto my-0 w-6xl px-48'>
           {/* logo */}
           <a className='flex flex-row items-center gap-3 text-3xl' href='/dashboard'>
            <span>{username}</span>
            <span><FaRegPenToSquare/></span>
           </a>
            {/* routes */}
            <div className='flex flex-row gap-10 text-xl'>
                <button  className='p-2 px-10 justify-center border border-black' onClick={() => logout(router)}>Logout</button>
            </div>
    </nav>
  )
}

export default DashboardNav