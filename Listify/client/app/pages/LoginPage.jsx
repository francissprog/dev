"use client"
import React, { useEffect } from 'react'
import Login from '../components/Login'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'


const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    const authToken = Cookies.get("token");
    if (authToken) return router.replace("/dashboard");
  })
  return (
    <main className='grid place-content-center min-h-[70vh]'>
        <div className='border border-black w-[600px] h-auto p-7'>
           <Login/>
        </div>
    </main>
  )
}
 
export default LoginPage