import React from 'react'
import { FaRegPenToSquare } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='h-36 flex justify-between items-center mx-auto my-0 w-6xl px-48'>
           {/* logo */}
           <a className='flex flex-row items-center gap-3 text-3xl' href='/'>
            <span>Listify</span>
            <span><FaRegPenToSquare/></span>
           </a>
            {/* routes */}
            <div className='flex flex-row gap-10 text-xl'>
                <a href={'/auth/'} className='border border-black p-2 px-10 c'>Login</a>
                <a href={'/auth/register'} className='p-2 px-10 justify-center'>Register</a>
            </div>
    </nav>
  )
}

export default Navbar