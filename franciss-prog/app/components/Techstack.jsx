"use client"
import React from 'react'
import { techstack } from '../json/techstack'
const Techstack = () => {
  return (
   <div className='flex gap-3'>
      {techstack.map((tech) => (
          <div key={tech.id} className='tooltip relative text-4xl'>
              <tech.icon />
              <span className='tooltiptext'>{tech.language}</span>
          </div>
      ))}
   </div>
  ) 
}

export default Techstack