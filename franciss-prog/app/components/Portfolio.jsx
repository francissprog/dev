import React from 'react'
import Carousel from './Carousel'

const Portfolio = () => {
  return (
    <main className="h-screen flex justify-center items-center flex-col" id='portfolio'>
        <span className='text-6xl mb-[127px]'>MY PORTFOLIO</span>
        {/* conatiner */}
        <div>
            <Carousel/>
        </div>
    </main>
  )
}

export default Portfolio