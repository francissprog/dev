"use client"
import React from 'react'
import DashboardNav from '../components/DashboardNav'

const layout = ({children}) => {
  return (
   <>
    <DashboardNav/>
    {children}
   </>
  )
}

export default layout