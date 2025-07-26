import React from 'react'

const Landing = () => {
  return (
    <section className='grid place-items-center min-h-[50vh] '>
        <div className='flex flex-col text-center gap-3 justify-center'>
           <span className='text-[70px] font-medium'>Welcome to Listify!</span>
           <span className='mb-5 text-xl text-gray-600'>Your ultimate tool for task management and productivity.</span>
           <div className='text-center'>
                <a href='auth/' className=' text-xl  p-2  border border-black '>Let's get Started  </a>  
           </div>
        </div>
    </section>
  )
}

export default Landing